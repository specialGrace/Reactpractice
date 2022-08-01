import React from "react";

function ButtonStyledHOC(Component) {
  const StyledButton = (props) => {
    const style = {
      backgroundColor: "#61dbfb",
      padding: "10px 25px",
      border: "none",
      borderRadius: 5,
      margin: 3,
      cursor: "pointer",
      fontSize: 18,
      color: "white",
    };
    return <Component {...props} style={style} />;
  };
  return StyledButton;
}

export default ButtonStyledHOC;
