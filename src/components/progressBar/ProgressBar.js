import React from 'react'

import './Styles.scss'

const ProgressBar = ({segments, currentQuestionId, isComplete}) => {

  const width =  `${((currentQuestionId + 1) / segments) * 100}%`
  return (
    <div className="progressBar">
      <div className="progressBar__line">
        <div className="progressBar__completedBar" style={isComplete ? {width:"100%", borderRadius:"50px"} : {width:width}}>

        </div>

      </div>
      
    </div>
  )
}

export default ProgressBar