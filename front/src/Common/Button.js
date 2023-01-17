import React from "react";
import "./style.css";
// import CommonColors from '../Theme/Colors'

export default function Button(props) {
  return (
    <div className="ButtonContainer">
      <button className="commonBtn" type="button" onClick={props.onClick}>
        {props.BtnName}
      </button>
    </div>
  );
}
