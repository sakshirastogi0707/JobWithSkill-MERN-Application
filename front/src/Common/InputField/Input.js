import React from "react";
import './inputStyle.css'
export default function Input(props) {
  return (
    <>
      <input
        className="inputBox"
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required=""
      />
    </>
  );
}
