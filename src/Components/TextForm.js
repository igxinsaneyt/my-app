import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  // Convert to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Convert to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Clear text
  const handleClearClick = () => {
    setText("");
  };

  // Handle typing in textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container my-3">
      <h2>Enter Text To Analyse</h2>
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        rows="6"
      ></textarea>

      {/* Buttons */}
      <div className="d-flex flex-wrap gap-2 mt-3">
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-danger" onClick={handleClearClick}>
          Clear
        </button>
      </div>

      {/* Summary */}
      <div className="my-3">
        <h4>Your Summarised Text Here:</h4>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words, {text.length} characters.
        </p>
      </div>
    </div>
  );
}
