import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const [greenMode, setGreenMode] = useState("light");

  // This function is for Green Dark Mode:-
  const greenModeSwitch = () => {
    if (greenMode === "light") {
      setGreenMode("green");
      document.body.style.backgroundColor = "green";
    } else {
      setGreenMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  // This function is for the blue dark mode:-
  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const modeSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode is enabled", "Success,");
      document.body.style.backgroundColor = "#1b253f";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "Success,");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          mode={mode}
          modeSwitch={modeSwitch}
          greenMode={greenMode}
          greenModeSwitch={greenModeSwitch}
        />
        <div>
          <Alert alert={alert} />
          {/* <Switch> */}
            {/* <Route path="/About"> */}
              {/* <About /> */}
            {/* </Route> */}

            {/* <Route path="/"> */}
              <TextForm
                showAlert={showAlert}
                alert={alert}
                textHeading="Enter your Text Below :-"
                mode={mode}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
