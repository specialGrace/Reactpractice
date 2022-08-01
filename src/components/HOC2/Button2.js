import React from "react";

// button without style
const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
