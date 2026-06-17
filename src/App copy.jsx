import { useState, useEffect } from "react";
import { stages } from "./callFlow";
import ThemeToggleButton from "./ThemeToggleButton";
const STORAGE_KEY = "bm-call-session";
export default function App() {
  const savedSession = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  const [currentStage, setCurrentStage] = useState(
    savedSession.currentStage || "hello",
  );

  const [history, setHistory] = useState(savedSession.history || []);

  const [notes, setNotes] = useState(savedSession.notes || "");

  const completed = [
    ...new Set(
      [...history, currentStage].flatMap(
        (stageId) => stages[stageId]?.checklist || [],
      ),
    ),
  ];

  const node = stages[currentStage];

  const moveTo = (nextId) => {
    setHistory((prev) => [...prev, currentStage]);
    setCurrentStage(nextId);
  };

  const resetNavigator = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset the call navigator? This will clear all progress and notes.",
    );

    if (!confirmReset) return;
    setCurrentStage("hello");
    setHistory([]);
    setNotes("");

    localStorage.removeItem(STORAGE_KEY);
  };

  function goBack(steps = 1) {
    if (history.length === 0) return;

    const targetIndex = Math.max(0, history.length - steps);

    const previousStage = history[targetIndex];

    setHistory((prev) => prev.slice(0, targetIndex));
    setCurrentStage(previousStage);
  }
  function returnFromObjection() {
    const targetIndex = [...history]
      .reverse()
      .findIndex((stageId) => !stageId.startsWith("obj_"));

    if (targetIndex === -1) return;

    const actualIndex = history.length - 1 - targetIndex;

    const previousStage = history[actualIndex];

    setHistory((prev) => prev.slice(0, actualIndex));
    setCurrentStage(previousStage);
  }

  const checklistItems = [
    "Get Access to DM", // pass the gatekeeper and get access to the decision maker
    "DM Identified", // identify the decision maker get their name and title
    "Set A Callback", // set a callback if the decision maker is not available
    "DM Reached", // reach the decision maker
    "Show Value", // show the value of the product or service
    "Schedule Meeting", // schedule a meeting time and date with the decision maker
    "Confirm Access", // confirm the decision maker is the right person to make the decision
    "Capture Contact Info", // capture the decision maker's email and phone number
    "Confirm Schedule", // confirm the meeting time and date and the decision maker name
  ];
  const objections_actions = [
    {
      label: "Not Interested",
      next: "obj_not_interested",
    },

    {
      label: "Too Busy",
      next: "obj_too_busy",
    },

    {
      label: "Send Email",
      next: "obj_send_email",
    },

    {
      label: "Already Have Online Ordering",
      next: "obj_online_ordering",
    },

    {
      label: "Use DoorDash/UberEats",
      next: "obj_competitor",
    },

    {
      label: "How Much Does It Cost?",
      next: "obj_price",
    },

    {
      label: "Bad Experience With BM",
      next: "obj_bad_experience",
    },

    {
      label: "Never Heard Of BM",
      next: "obj_never_heard",
    },
  ];

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currentStage,
        history,
        notes,
      }),
    );
  }, [currentStage, history, notes]);
  return (
    <div className="h-screen bg-gray-100 p-6 grid grid-cols-3 gap-6">
      {/* Script Engine */}
      <div className="col-span-2 bg-white rounded-xl p-6 shadow">
        <div className="flex justify-between items-center">
          <h2 className="text-xl px-2 py-1 bg-gray-600/50 text-black font-bold rounded-lg">
            {node.title}
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => goBack()}
              disabled={history.length === 0}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:opacity-80 cursor-pointer"
            >
              Back
            </button>

            <button
              onClick={resetNavigator}
              className="px-4 py-2 bg-red-700 text-white rounded-lg hover:opacity-80 cursor-pointer"
            >
              Reset Call
            </button>
          </div>
        </div>

        <p className="mt-4 text-lg">{node.script}</p>

        <div className="mt-6 flex gap-3 flex-wrap">
          {node.actions.map((action) => {
            if (action.next === "back_to_script") {
              return (
                <button
                  key={action.label}
                  onClick={() => returnFromObjection(1)}
                  className={`px-4 py-2 ${action.color === "green" ? "bg-green-600" : ""} ${action.color === "yellow" ? "bg-yellow-700" : ""} ${action.color === "red" ? "bg-red-600" : ""} bg-blue-600 text-white rounded-lg cursor-pointer hover:opacity-80`}
                >
                  {action.label}
                </button>
              );
            }
            return (
              <button
                key={action.label}
                onClick={() => moveTo(action.next)}
                className={`px-4 py-2 ${action.color === "green" ? "bg-green-600" : ""} ${action.color === "yellow" ? "bg-yellow-700" : ""} ${action.color === "red" ? "bg-red-600" : ""} bg-blue-600 text-white rounded-lg cursor-pointer hover:opacity-80`}
              >
                {action.label}
              </button>
            );
          })}
          <div className="w-full mt-4">
            <h2 className="w-fit text-xl px-2 py-1 bg-gray-600/50 text-black font-bold rounded-lg">
              Objections:
            </h2>
            <div className="flex gap-2 flex-wrap mt-2">
              {objections_actions.map((action) => {
                return (
                  <button
                    key={action.label}
                    onClick={() => moveTo(action.next)}
                    className={`px-4 py-2 text-sm bg-gray-600 text-white rounded-lg cursor-pointer hover:opacity-80`}
                  >
                    {action.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* notes area and Checklist  */}
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-6 relative">
        <ThemeToggleButton className="absolute top-4 right-4" />

        {/* notes area  */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-bold text-lg mb-4">Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-2 border rounded-lg flex-1"
            placeholder="Enter your notes here..."
          />
        </div>
        {/* Checklist */}
        <div>
          <h3 className="font-bold text-lg mb-4">Call Coverage</h3>
          <div className="flex flex-wrap gap-4">
            {checklistItems.map((item) => (
              <div key={item} className="flex gap-1">
                <input
                  type="checkbox"
                  checked={completed.includes(item)}
                  readOnly
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
