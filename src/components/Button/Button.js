import React from "react";
import "./Button.css";

// Styles Classes
const STYLES = ["btn--primary", "btn--outline"];
// Sizes Classes
const SIZES = ["btn--medium", "btn--large"];

// Button Component
export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  // Check If Button Has Style
  const getStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  // Check If Button Has Size
  const getSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Return View
  return (
    <button className={`btn ${getStyle} ${getSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
