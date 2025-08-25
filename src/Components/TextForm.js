import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "warning");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: props.mode === "dark" ? "#1c1f24" : "white",
          color: props.mode === "dark" ? "white" : "black",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2">Convert To Uppercase</button>
        <button className="btn btn-primary m-2">Convert To Lowercase</button>
        <button className="btn btn-danger m-2">Clear</button>

        <h1>Your Summarised Text Here: </h1>
        <p>
          {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}{" "}
          words, {text.length} characters.
        </p>
        <p>
          {0.008 *
            (text.trim().length === 0
              ? 0
              : text.trim().split(/\s+/).length)}{" "}
          minutes.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>
      </div>
    </>
  );
}
