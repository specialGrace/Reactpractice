import React from "react";
import ButtonWithStyle2 from "./ButtonWithStyle2";

// button with style
const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default ButtonWithStyle2(Button, "danger");
