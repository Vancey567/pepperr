import React from "react";
import Button from "../Button/Button";
import "./FinancialOverview.css";

const FinancialOverview = () => {
  return (
    <div className="financial-container">
      <div className="financial">
        {/* <div className="top-left">
          <img src="/images/top-left.png" alt="top-left" />
        </div>
        <div className="bottom-right">
          <img src="/images/bottom-right.png" alt="bottom-right" />
        </div> */}
        <div className="financial-details">
          <h1>
            A nice and simple <br /> financial overview
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="financial-numbers">
            <div className="widgets financial-items">
              <span className="number">120+</span>
              <span className="financial-items">Useful widgets</span>
            </div>
            <div className="integrations financial-items">
              <span className="number">20+</span>
              <span>Integrations</span>
            </div>
            <div className="features-out financial-items">
              <span className="number">65+</span>
              <span>Features out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
