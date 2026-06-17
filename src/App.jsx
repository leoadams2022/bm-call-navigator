import { useState, useEffect } from "react";
import { checklistItems, objections_actions, stages } from "./callFlow";
import ThemeToggleButton from "./ThemeToggleButton";
import ConfirmModal from "./ConfirmModal";

const STORAGE_KEY = "bm-call-session";

export default function App() {
  const [showResetModal, setShowResetModal] = useState(false);

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
    // const confirmReset = window.confirm(
    //   "Are you sure you want to reset the call navigator? This will clear all progress and notes.",
    // );

    // if (!confirmReset) return;

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 transition-color duration-300">
      {/* Script Engine */}
      <div className="col-span-2 bg-white dark:bg-gray-900 rounded-xl p-6 shadow border border-transparent dark:border-gray-800  transition-color duration-300">
        <div className="flex justify-between items-center">
          <h2 className="text-xl px-2 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-bold rounded-lg">
            {node.title}
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => goBack()}
              disabled={history.length === 0}
              className="px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-lg hover:opacity-80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>

            {/* // onClick={resetNavigator} */}
            <button
              onClick={() => setShowResetModal(true)}
              disabled={currentStage === "hello" && notes === ""}
              className="px-4 py-2 bg-red-700 dark:bg-red-600 text-white rounded-lg hover:opacity-80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset Call
            </button>
          </div>
        </div>

        <p className="mt-4 text-lg text-gray-900 dark:text-gray-100">
          {node.script}
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          {node.actions.map((action) => {
            const buttonColor =
              action.color === "green"
                ? "bg-green-600 dark:bg-green-500"
                : action.color === "yellow"
                  ? "bg-yellow-700 dark:bg-yellow-600"
                  : action.color === "red"
                    ? "bg-red-600 dark:bg-red-500"
                    : "bg-blue-600 dark:bg-blue-500";

            if (action.next === "back_to_script") {
              return (
                <button
                  key={action.label}
                  onClick={() => returnFromObjection()}
                  className={`px-4 py-2 ${buttonColor} text-white rounded-lg cursor-pointer hover:opacity-80`}
                >
                  {action.label}
                </button>
              );
            }

            return (
              <button
                key={action.label}
                onClick={() => moveTo(action.next)}
                className={`px-4 py-2 ${buttonColor} text-white rounded-lg cursor-pointer hover:opacity-80`}
              >
                {action.label}
              </button>
            );
          })}

          <div className="w-full mt-4">
            <h2 className="w-fit text-xl px-2 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-bold rounded-lg">
              Objections:
            </h2>

            <div className="flex gap-2 flex-wrap mt-2">
              {objections_actions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => moveTo(action.next)}
                  className="px-4 py-2 text-sm bg-gray-600 dark:bg-gray-700 text-white rounded-lg cursor-pointer hover:opacity-80"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notes Area & Checklist */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow border border-transparent dark:border-gray-800 flex flex-col gap-6 relative transition-color duration-300">
        <ThemeToggleButton className="absolute top-4 right-4" />

        {/* Notes */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
            Notes
          </h3>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="
              w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-color duration-300 resize-none"
            placeholder="Enter your notes here..."
          />
        </div>

        {/* Checklist */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white transition-color duration-300">
            Call Coverage
          </h3>

          <div className="flex flex-wrap gap-4">
            {checklistItems.map((item) => (
              <div
                key={item}
                className="flex gap-1 items-center text-gray-900 dark:text-gray-100"
              >
                <input
                  type="checkbox"
                  checked={completed.includes(item)}
                  readOnly
                  className="accent-blue-600 dark:accent-blue-500"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={showResetModal}
        title="Reset Call Navigator"
        message="Are you sure you want to reset the call navigator? This will clear all progress and notes."
        confirmText="Reset"
        cancelText="Cancel"
        onCancel={() => setShowResetModal(false)}
        onConfirm={() => {
          resetNavigator();
          setShowResetModal(false);
        }}
      />
    </div>
  );
}
