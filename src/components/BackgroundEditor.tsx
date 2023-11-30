"use client";
import { useState } from "react";

const BackgroundEditor = () => {
  const [space, setSpace] = useState("60px 60px");
  const [gradientValue, setGradientValue] = useState(
    "linear-gradient(to top, transparent 5px, #0c0a09 65px), linear-gradient(to left, transparent 5px, #0c0a09 65px)"
  );

  const applySampleValues = (sample: (typeof Samples)[0]) => {
    const editorElement = document.getElementById("editor");
    const backgroundSizeValue = sample.space.split(" ").join("px ") + "px";

    if (editorElement) {
      editorElement.style.backgroundSize = backgroundSizeValue;
      editorElement.style.backgroundImage = sample.background;
    }
  };

  const handleInputChange = (e: any) => {
    setGradientValue(e.target.value);
    const backgroundSizeValue = space.split(" ").join("px ") + "px";

    const editorElement = document.getElementById("editor");
    if (editorElement) {
      editorElement.style.backgroundSize = backgroundSizeValue;
    }
  };

  return (
    <div>
      <div
        id="editor"
        className="fixed inset-0
        z-0 pointer-events-none"
        style={{ backgroundImage: gradientValue, backgroundSize: space }}
      />
      <div className="flex w-full max-w-lg absolute flex-col bg-white/20 p-4 space-y-2 z-10">
        <p>Editor:</p>
        <label>
          <textarea
            rows={3}
            className="bg-transparent w-full text-lime-400 border border-opacity-25 px-2"
            value={gradientValue}
            onChange={handleInputChange}
            placeholder="linear-gradient(to right, transparent 5px, #000 65px)"
          />
        </label>
        <label>
          <input
            className="bg-transparent w-full text-lime-400 border border-opacity-25 px-2"
            value={space}
            onChange={(e: any) => setSpace(e.target.value)}
            placeholder="linear-gradient(to right, transparent 5px, #000 65px)"
          />
        </label>
        <div className="space-x-2 pt-2 text-sm">
          <button
            className="border border-lime-400 px-2"
            onClick={() => applySampleValues(Samples[0])}
          >
            Sample 1
          </button>
          <button
            className="border border-lime-400 px-2"
            onClick={() => applySampleValues(Samples[1])}
          >
            Sample 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundEditor;

const Samples = [
  {
    space: "100px 100px",
    background:
      "linear-gradient(to left, transparent 5px, #0c0a09 65px), linear-gradient(to bottom, transparent 5px, #0c0a09 65px)",
  },
  {
    space: "100px 100px",
    background:
      "linear-gradient(to right, transparent 5px, #0c0a09 65px), linear-gradient(to top, transparent 5px, #0c0a09 65px)",
  },
];
