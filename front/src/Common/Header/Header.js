import React from "react";
import "./header.css";
export default function header(props) {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">{props.title}</span>
      </div>
      <img
        className="headerImg"
        src={props.SectionImg}
        alt=""/>
    </div>
  );
}
