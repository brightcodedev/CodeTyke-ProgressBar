import React from 'react';

import './Styles.scss';

const ProgressBar = (props) => {
    console.log("PROPS", props)
    const {totalSegments, segmentsComplete} = props

    const progressPercent = segmentsComplete / totalSegments * 100
    const remainingPercent = 100 - progressPercent

    const fillStyle = {
        width: `${progressPercent}%`
    }
    const remainingStyle = {
        width: `${remainingPercent}%`
    }
    const endcapStyle = {
      display: remainingPercent ? 'unset' : 'none'
    }

    return (
        <div className="progressBar" role="progressbar" aria-valuenow={segmentsComplete} aria-valuemin="0" aria-valuemax={totalSegments} >
            <div className="progressBar__fill" style={fillStyle}></div>
            <div className="progressBar__remaining" style={remainingStyle}></div>
            <div className="progressBar__endcap" style={endcapStyle}></div>
        </div>
    )
}

export default ProgressBar
