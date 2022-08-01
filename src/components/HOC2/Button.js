import React from "react";
import ButtonWithStyle from "./ButtonWithStyle";

// button with style
const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default ButtonWithStyle(Button);
