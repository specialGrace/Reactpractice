import React from "react";

const ButtonWithStyle = (OriginalComponent) => {
  const EnhancedButton = (props) => {
    const buttonStyles = {
      backgroundColor: "#61dbfb",
      padding: "10px 25px",
      border: "none",
      borderRadius: 5,
      margin: 3,
      cursor: "pointer",
      fontSize: 18,
      color: "white",
    };
    return <OriginalComponent {...props} style={buttonStyles} />;
  };
  return EnhancedButton;
};

export default ButtonWithStyle;
