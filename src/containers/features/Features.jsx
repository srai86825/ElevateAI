import React from "react";
import "./features.css";

import { Feature } from "../../components";
import featuresData from "./featureData";

const Features = () => {
  return (
    <div className="elevate__features section__padding" id="features">
      <div className="elevate__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="elevate__features-container">
        {featuresData.map((feature, i) => (
          <Feature
            key={i + feature.title}
            text={feature.text}
            title={feature.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
