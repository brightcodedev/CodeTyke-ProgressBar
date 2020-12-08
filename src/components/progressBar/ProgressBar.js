import React from 'react';

import './Styles.scss';

const ProgressBar = (props) => {
    const {max, value} = props

    const progressPercent = value / max * 100

    const fillStyle = {
        width: `${progressPercent}%`
    }

    return (
        <div className="progressBar" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax={max} >
            <div className="progressBar__fill" style={fillStyle}></div>
        </div>
    )
}

export default ProgressBar
