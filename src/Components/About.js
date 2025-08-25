import React, { useState } from "react";

export default function About() {
  const [setmyStyle, setsetmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [myText, setmyText] = useState("Enable Light Mode");

  const changeMode = () => {
    if (setmyStyle.color === "white") {
      setsetmyStyle({
        color: "black",
        backgroundColor: "white",
        border: '1px solid white'
      });
      setmyText("Enable Dark Mode");
    } else {
      setsetmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setmyText("Enable Light Mode");
    }
  };

  return (
    <div className="container my-3" style={setmyStyle}>
      <h1 className="my-3">About Us</h1>

      {/* Developer Image Section */}
      <div className= "text-center mb-4">
        <img
          src="https://pbs.twimg.com/profile_images/470632818653921280/l5V_RKUu_400x400.png"
          alt="Developer of Text Utils"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "300px" }}
        />
        <p className="mt-2"><em>Developer of TextUtils</em></p>
      </div>

      {/* Accordion Section */}
      <div className="accordion" id="accordionExample">
        {/* Accordion Item #1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={setmyStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={setmyStyle}>
              <strong>This is the first item’s accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element.
            </div>
          </div>
        </div>

        {/* Accordion Item #2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={setmyStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={setmyStyle}>
              <strong>This is the second item’s accordion body.</strong> Hidden by default, it uses Bootstrap transitions.
            </div>
          </div>
        </div>

        {/* Accordion Item #3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={setmyStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={setmyStyle}>
              <strong>This is the third item’s accordion body.</strong> Customize it with your own content.
            </div>
          </div>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <div className="container my-3 text-center">
        <button type="button" className="btn btn-primary" onClick={changeMode}>
          {myText}
        </button>
      </div>
    </div>
  );
}
