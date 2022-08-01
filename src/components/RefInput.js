import React, { Component } from "react";

export default class RefInput extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      firstName: "",
    };
    this.onchangeHandler = this.onchangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  // useRefs
  city = React.createRef();
  country = React.createRef();

  //   change handlere
  onchangeHandler() {
    console.log("clicked");
  }

  submitHandler(e) {
    e.preventDefault();
    const name = this.city.current.value;
    console.log(name);
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {/* input with Ref - Uncontrolled input */}
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={this.onchangeHandler}
          ref={this.city}
        />
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={this.onchangeHandler}
          ref={this.country}
        />

        {/* input component */}
        <InputField
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="first name"
          onchangeHandler={this.onchangeHandler}
        />
        <InputField
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
          onchangeHandler={this.onchangeHandler}
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

const InputField = ({
  type,
  name,
  value,
  placeholder,
  onchangeHandler,
  state,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onchangeHandler}
    />
  );
};
