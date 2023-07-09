import React from "react";
import "./feature.css";
const Feature = ({title,text}) => {
  return (
    <div className="elevate__features-container__feature">
      <div className="elevate__features-container_title">
        <div/>
        <h1>{title}</h1>
      </div>
      <div className="elevate__features-container_text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
