import React from 'react'

import './Styles.scss'

const ProgressBar = ({quizData, currentQuestionId}) => {
  return (
    <>
      <div className="progressBar progressBar--incomplete"></div>
      <div className="progressBar progressBar--complete"></div>
    </>
  )

}

export default ProgressBar
