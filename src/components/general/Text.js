import React, { useState } from "react";

export default function Text() {
  const [textVal, setTextVal] = useState("this is text");
  const [saveVal, setSaveVal] = useState("Not Saved yet");

  const changeHendle = (event) => {
    setTextVal(event.target.value);
  };

  const ClickUpper = () => {
    let upperText = textVal.toUpperCase();
    setTextVal(upperText);
  };

  const ClickLower = () => {
    let lowerText = textVal.toLowerCase();
    setTextVal(lowerText);
  };

  const clickSaveValue = () => {
    setSaveVal(textVal);
  };
  const clickClearValue = () => {
    setTextVal("");
  };

  return (
    <>
      <div className="container">
        <h1>Enter Text for Analysis</h1>
        <div className="form-floating m-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="mybox"
            rows={8}
            value={textVal}
            onChange={changeHendle}
          ></textarea>
          <label for="mybox">Enter Text</label>
        </div>
        <button className="btn btn-primary m-3" onClick={ClickUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-3" onClick={ClickLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger m-3" onClick={clickClearValue}>
          Clear
        </button>
        <button className="btn btn-success m-3" onClick={clickSaveValue}>
          Save
        </button>
        <h3>Show Edited Text</h3>
        <p>{saveVal}</p>
      </div>
    </>
  );
}
