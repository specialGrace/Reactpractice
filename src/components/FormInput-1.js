import React, { Component } from "react";

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
      message: "",
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  }

  numberChange(e) {
    console.log(e.target.value);
    this.setState({
      number: e.target.value,
    });
  }

  messageChange(e) {
    console.log(e.target.value);
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form noValidate>
          <input
            type="text"
            value={this.state.name}
            placeholder="name"
            onChange={(e) => this.setState({ name: e.target.value })}
            // onChange={this.handleChange.bind(this)}
          />
          <input
            type="number"
            value={this.state.number}
            placeholder="number"
            // onChange={(e)=> this.setState({number:e.target.value})}
            onChange={this.numberChange.bind(this)}
          />

          <textarea
            type="text"
            value={this.state.message}
            placeholder="message"
            cols={10}
            rows={10}
            // onChange={(e)=> this.setState({number:e.target.value})}
            onChange={this.messageChange.bind(this)}
          ></textarea>

          <input
            type="number"
            value={this.state.number}
            placeholder="number"
            // onChange={(e)=> this.setState({number:e.target.value})}
            onChange={this.numberChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}
export default FormInput;
