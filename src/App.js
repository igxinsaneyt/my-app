import { useState } from "react";
import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000); // Alert disappears after 2 seconds
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text Utils - Light Mode'
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#121417";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text Utils - Dark Mode'
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        about="About TextUtils"
        toggleMode={toggleMode}
        mode={mode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm heading="Enter Text To Analyse" mode={mode} showAlert={showAlert} />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
