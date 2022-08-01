import React, { Component } from "react";

class FormValidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      touched: { lastName: false, firstName: false, email: false },
    };
    this.handleChange = this.handleChange.bind(this);
    //   this.validate = this.validate.bind(this)
  }

  handleBlur(e) {
    const { name } = e.target;
    this.setState({
      touched: { ...this.state.touched, [name]: true },
    });
  }

  validate = () => {
    const errors = {
      errorFirstName: "",
      errorEmail: "",
      errorLastName: "",
    };
    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.errorFirstName = "Name should be between 3 and 12";
    }
    const pattern = /[@]/gi;
    console.log(pattern.test(this.state.email));
    console.log(this.state.email);
    if (
      this.state.touched.email &&
      this.state.email.length > 0 &&
      pattern.test(this.state.email) === false
    ) {
      console.log("fired");
      errors.errorEmail = "Pls use a valid email";
    }
    return errors;
  };

  handleChange(e) {
    const { name, value } = e.target;
    // console.log(name,value)
    this.setState({
      [name]: value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    console.log("clicked");
  }
  render() {
    const { errorFirstName, errorEmail, errorLastName } = this.validate();
    return (
      <div>
        <form onSubmit={this.submitHandler.bind(this)} noValidate>
          {errorFirstName && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>
              error: {errorLastName}
            </p>
          )}
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="first name"
            onChange={this.handleChange}
            onBlur={this.handleBlur.bind(this)}
          />

          {errorEmail && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>
              error: {errorEmail}
            </p>
          )}
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            onBlur={this.handleBlur.bind(this)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default FormValidate;
