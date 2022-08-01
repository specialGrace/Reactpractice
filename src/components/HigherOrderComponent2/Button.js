import React from "react";
import ButtonStyledHOC from "./ButtonStyled-HOC";
import ButtonWithStyle from "./ButtonWithStyle2";

function Button({ onClick, text, style }) {
  return (
    <div>
      <button style={style} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default ButtonWithStyle(Button, "danger");
