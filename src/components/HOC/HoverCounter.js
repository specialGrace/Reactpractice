import React, { Component } from "react";
import HigherOrderComponent from "./HigherOrderComponent";

class HoverCounter extends Component {
  render() {
    const { count, counterHandler } = this.props;
    return (
      <div>
        <button onMouseOut={counterHandler}>Hovered {count} times </button>
      </div>
    );
  }
}

export default HigherOrderComponent(HoverCounter);
