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
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const { name, number, message } = this.state;
    const data = {
      name: name,
      number: number,
      message: message,
      // name:this.state.name,
      // number:this.state.number,
      // message:this.state.message
    };

    console.log(data);
    // clear input field
    this.setState({
      name: "",
      number: "",
      message: "",
    });
  }

  render() {
    return (
      <div>
        <form noValidate onSubmit={this.submitHandler.bind(this)}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="number"
            name="number"
            value={this.state.number}
            placeholder="number"
            onChange={this.handleChange.bind(this)}
          />

          <textarea
            type="text"
            value={this.state.message}
            name="message"
            placeholder="message"
            cols={10}
            rows={10}
            onChange={this.handleChange.bind(this)}
          ></textarea>

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default FormInput;
