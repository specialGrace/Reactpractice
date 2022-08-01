import React from "react";

const ButtonWithStyle = (OriginalComponent, name = "default") => {
  const EnhancedButton = (props) => {
    const colors = [
      {
        name: "default",
        backgroundColor: "#e7e7e7",
        color: "#000000",
      },
      {
        name: "react",
        backgroundColor: "#61dbfb",
        color: "#ffffff",
      },
      {
        name: "success",
        backgroundColor: "#4CAF50",
        color: "#ffffff",
      },
      {
        name: "info",
        backgroundColor: "#2196F3",
        color: "#ffffff",
      },
      {
        name: "warning",
        backgroundColor: "#ff9800",
        color: "#ffffff",
      },
      {
        name: "danger",
        backgroundColor: "#f44336",
        color: "#ffffff",
      },
    ];

    const { color, backgroundColor } = colors.find((c) => c.name === name);

    const buttonStyles = {
      backgroundColor,
      padding: "10px 25px",
      border: "none",
      borderRadius: 5,
      margin: 3,
      cursor: "pointer",
      fontSize: 18,
      color,
    };
    return <OriginalComponent {...props} style={buttonStyles} />;
  };
  return EnhancedButton;
};

export default ButtonWithStyle;
