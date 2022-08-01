import React, { Component } from "react";

export default class FormTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
      email: "",
      webDevelopment: "",
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
    const { name, number, email, webDevelopment } = this.state;
    const data = {
      name: name,
      number: number,
      email: email,
      webDevelopment: webDevelopment,
    };
    console.log(data);
    this.setState({
      name: "",
      number: "",
      email: "",
      webDevelopment: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler.bind(this)}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="country"
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="number"
            name="number"
            value={this.state.number}
            placeholder="age"
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.handleChange.bind(this)}
          />
          <select
            name="webDevelopment"
            id=""
            value={this.state.webDevelopment}
            onChange={this.handleChange.bind(this)}
          >
            <option value="Javascript">Javascript</option>
            <option value="nodejs">node js</option>
            <option value="python">python</option>
          </select>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
