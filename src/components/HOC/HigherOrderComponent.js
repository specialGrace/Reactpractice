import React, { Component } from "react";

function HigherOrderComponent(OriginalComponent) {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
      this.counterHandler = this.counterHandler.bind(this);
    }

    counterHandler() {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          counterHandler={this.counterHandler}
        />
      );
    }
  }
  return NewComponent;
}

export default HigherOrderComponent;
