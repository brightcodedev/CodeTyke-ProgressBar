import React from 'react';
import './Styles.scss';

export default function ProgressBar({percentage}) {
  return (
    <div className="progressBar">
      <div className="progressBar__progressDone" style={{width: `${percentage}%`, borderRadius:`${percentage === 100 ? "10px" : "10px 0 0 10px"}`}}>
      </div>
    </div>
  )
}
