import React, { Component } from "react";
import HigherOrderComponent from "./HigherOrderComponent";

class ClickCounter extends Component {
  render() {
    const { count, counterHandler } = this.props;
    return (
      <div>
        <button onClick={counterHandler}>Clicked {count} times </button>
      </div>
    );
  }
}

export default HigherOrderComponent(ClickCounter);
