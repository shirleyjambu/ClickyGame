import React from "react";
import "./flower.css";


function FlowerCard(props) {
  return (
    <div className="col-3 card">
      <div className="img-container">
        <img alt={props.name} src={'./assets/images/'+ props.image} onClick={props.onClick}/>
      </div>
    </div>
  );
}

export default FlowerCard;
