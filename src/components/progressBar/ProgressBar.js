import React from 'react'

import './Styles.scss'

const ProgressBar = ({quizData, currentQuestionId}) => {
  const progressBarWidth = String(((currentQuestionId + 1) / (quizData.totalQuestions + 1)) * 100) + "%"
  console.log(progressBarWidth)
  const progressBarStyle = {
    width: progressBarWidth
  }
  return (
    <div className="progressBar">
      <div className="progressBar--incomplete">
        <div className="progressBar--complete" style={progressBarStyle}></div>
      </div>
    </div>
  )

}

export default ProgressBar
