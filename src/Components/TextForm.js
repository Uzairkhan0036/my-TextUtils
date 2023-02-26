import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("UpperCase Done", "Success,");
  };
  // This function handles the text for lowercase order:-

  const handleLowerCase = () => {
    let lowText = text.toLowerCase();
    settext(lowText);
    props.showAlert("LowerCase Done", "Success,");
  };
  //  this function handles the clear text btn:-
  const handleClearText = () => {
    props.showAlert("LowerCase Done", "Success,");
    settext("");
    props.showAlert("Cleared", "Success,");
  };

  // This function handles the textarea's text| The value in this is eqauls to text below in the textarea
  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  // This is my main textarea form:-
  return (
    <div
      className={`container text-${props.mode === "light" ? "dark" : "light"}`}
    >
      <div className="mb-3 ">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label my-4 "
        >
          <h3> {props.textHeading}</h3>
        </label>
        <textarea
          className="form-control"
          style={{ backgroundColor: props.mode === "light" ? "white" : "grey" }}
          onChange={handleOnChange}
          value={text}
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>

        {/* In this btn we are assigning a function which will handle on click
         */}
        <button
          type="button"
          onClick={handleUpperCase}
          className="btn btn-primary my-2"
        >
          Click to UpperCase
        </button>
        <button
          type="button"
          onClick={handleLowerCase}
          className="btn btn-primary my-2 mx-2"
        >
          Click to LowerCase
        </button>
        <button
          type="button"
          onClick={handleClearText}
          className="btn btn-primary my-2"
        >
          Click to Erase
        </button>
      </div>
      <h4>Text Details :-</h4>
      <p>
        Letters: {text.length} Words: {text.split(" ").length}
      </p>
      <h4>Preview :</h4>
      <p>{text.length > 0 ? text : "Enter Your Text to see Preview"}</p>
    </div>
  );
}
