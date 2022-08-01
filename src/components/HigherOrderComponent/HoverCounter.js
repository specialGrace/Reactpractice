import React, { Component } from "react";
import HOC from "./HOC";

class HoverCounter extends Component {
  render() {
    const { count, method } = this.props;
    return (
      <div>
        <button onMouseOut={method}>Clicked {count} times</button>
      </div>
    );
  }
}

export default HOC(HoverCounter);
