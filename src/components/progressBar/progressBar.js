import React from "react";
import "./Styless.scss";

export default function progressBar({ currQ, questions }) {
  // const progressStyle = {
  //     width: 25%;
  // }
  let progress = () => {
    // questions += 1;
    console.log((currQ / questions) * 100);
    return (currQ / questions) * 100;
  };

  console.log("FROM THE PROGRESS", currQ, progress);
  return (
    <div className="meter">
      <span style={{ width: `${progress()}%` }}></span>
      {/* style={progressStyle} */}
    </div>
  );
}
