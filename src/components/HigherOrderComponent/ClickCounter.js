import React, { Component } from "react";
import HOC from "./HOC";

class ClickCounter extends Component {
  render() {
    const { method, count, name } = this.props;
    console.log(name);
    return (
      <div>
        <button onClick={method}>Clicked {count} times</button>
      </div>
    );
  }
}

export default HOC(ClickCounter);
