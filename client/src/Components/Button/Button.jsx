import React, { useState } from "react";
import "./Button.css";

const Button = ({ value, color }) => {
  const [btnColor, setColor] = useState(color);
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!isHovered);
  };

  // const handleMouseLeave = () => {
  //   setHovered(false);
  // };

  const handleMouseEnter = () => {
    setColor("#b44ff8");
  };

  const handleMouseLeave = () => {
    setColor(color);
  };
  return (
    <button
      className={`btn-hover ${isHovered ? "hover-color" : ""}`}
      style={{ backgroundColor: btnColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {value}
    </button>
  );
};

export default Button;
