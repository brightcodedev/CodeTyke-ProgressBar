import React from 'react';
import './Styles.scss';

const ProgressBar = ({currentProgressValue, isComplete}) => {
  return ( <progress className={`${isComplete && "progressBar__complete"} progressBar`} id="file" value={currentProgressValue * 25} max="100">{`${currentProgressValue * 25}%`}</progress> )
}

export default ProgressBar;
