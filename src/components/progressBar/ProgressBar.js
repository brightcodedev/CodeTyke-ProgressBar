import React from 'react';
import './Styles.scss';

export default function ProgressBar({currentItem, totalItems}) {
  const percentage = (currentItem / totalItems) * 100
  const value_style = {
    width: `${percentage}%`
  }
  return (
    <div className="progressBar">
      <div className="progressBar__value" style={value_style}></div>
    </div>
  )
}
