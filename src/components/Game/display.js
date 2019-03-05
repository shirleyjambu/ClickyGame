import React from "react";

function Display(props) {
  return (
    <div>
    {props.label}<span className={`text-${props.clsName}`}>{props.children}</span>  
    </div>
  );
}

export default Display;
