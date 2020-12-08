import React from 'react';
import './Styles.scss';

const ProgressBar = (props) => {
    return (
        <progress 
            className={ props ? "progressBar" : null } 
            id="file" 
            min="0" 
            value={props.percentage} 
            max="100" 
        /> 
    )
}

export default ProgressBar