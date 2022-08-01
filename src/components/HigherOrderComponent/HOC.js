
import React from "react";

const HOC = (Component) => {
  console.log(Component);
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
      this.clickCounter = this.clickCounter.bind(this);
    }

    clickCounter() {
      this.setState((prev) => ({
        count: prev.count + 1,
      }));
    }
    render() {
      return (
        <Component
          {...this.props}
          method={this.clickCounter}
          count={this.state.count}
        />
      );
    }
  }
  return NewComponent;
};

export default HOC;
