import React from 'react';
import './Styles.scss';

const ProgressBar = (props) => {
  const styles = { width: `${props.progress}%` };

  if (props.isLastQuestion) {
    styles.borderRadius = '15px';
  }

  return (
    <div className="progressBarContainer">
      <div className="progressBarContainer__line">
        <div className="progressBarContainer__line__circle"></div>
        <div
          className="progressBarContainer__line__progress"
          style={styles}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
