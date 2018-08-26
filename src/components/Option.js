import React from 'react';

const Option = (props) => (
    <div className="option">
      <p className="option__text">{props.count}.{props.optionText}</p> {/*this is basically  count.options that user is felling into the form*/}
      <button
        className ="button button--link"
        onClick={(e) => {
        props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button> 
  </div>
);
export default Option;