import { useState, useEffect } from "react";
import { stages } from "./callFlow";
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

  const goBack = () => {
    if (history.length === 0) return;

    const previousStage = history[history.length - 1];

    setHistory((prev) => prev.slice(0, -1));
    setCurrentStage(previousStage);
  };

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
    <div className="h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Script Engine */}
        <div className="col-span-2 bg-white rounded-xl p-6 shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-xl px-2 py-1 bg-gray-600/50 text-black font-bold rounded-lg">
              {node.title}
            </h2>

            <div className="flex gap-2">
              <button
                onClick={goBack}
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
            {node.actions.map((action) => (
              <button
                key={action.label}
                onClick={() => moveTo(action.next)}
                className={`px-4 py-2 ${action.color === "green" ? "bg-green-600" : ""} ${action.color === "yellow" ? "bg-yellow-700" : ""} ${action.color === "red" ? "bg-red-600" : ""} bg-blue-600 text-white rounded-lg cursor-pointer hover:opacity-80`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-bold text-lg mb-4">Call Coverage</h3>

          {checklistItems.map((item) => (
            <div key={item} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={completed.includes(item)}
                readOnly
              />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* notes area  */}
        <div className="col-span-3 h-50 bg-white rounded-xl p-6 shadow flex flex-col">
          <h3 className="font-bold text-lg mb-4">Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-2 border rounded-lg flex-1"
            placeholder="Enter your notes here..."
          />
        </div>
      </div>
    </div>
  );
}
