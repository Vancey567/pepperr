import React from "react";
import { features } from "../../Data/features";
import Card from "../Card/Card";

import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-description">
        <h1>Supercharge your <br />workflow to get started</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Dignissimos
          reprehenderit voluptatem unde obcaecat
        </p>
      </div>
      {/* <div className="cards-container"> */}
        <div className="cards">
          {features.map((feature, i) => {
            return <Card key={i} feature={feature} />;
          })}
        </div>
      </div>
    // </div>
  );
};

export default Features;
