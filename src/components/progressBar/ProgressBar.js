import React from 'react';
import './Styles.scss';

const ProgressBar = ({quizData, currentQuestionId}) => {
  const progressBarWidth = String(((currentQuestionId + 1) / (quizData.totalQuestions + 1)) * 100) + "%"
  const progressBarStyle = {
    width: progressBarWidth
  }

  return (
    <div className="progressBar">
      <div className="progressBar__incomplete">
        <div className="progressBar__complete" style={progressBarStyle}></div>
      </div>
      <div className="progressBar__dot"></div>
    </div>
  )

}

export default ProgressBar;