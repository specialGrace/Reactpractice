
// //using Regex
// import React, { Component } from 'react'
// import { ReactDOM } from 'react'
//  import styles from './FormVal.module.css'

//  const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]\.))/
// const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,9}$/; 
// class FormVal extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             firstName: "",
//             lastName: "",
//             email: "",
//             password: "",
//             passwordConfirmation: "",
//             firstNameError: "",
//             lastNameError: "",
//             emailError: "",
//             passwordError: "",
//             passwordConfirmationError: "",
//             isFormSubmitted: false,
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleBlur = this.handleBlur.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.validateFirstName = this.validateFirstName.bind(this);
//         this.validateLastName = this.validateLastName.bind(this);
//         this.validateEmail = this.validateEmail.bind(this);
//         this.validatePassword = this.validatePassword.bind(this);
//         this.validatePasswordConfirmation =
//             this.validatePasswordConfirmation.bind(this);
//         this.validateField = this.validateField.bind(this);
//     }
//     handleBlur(e) {
//         const { name } = e.target;
//         this.validateField(name);
//         return;
//     }

//     handleChange(e) {
//         const { name, value } = e.target;
//         this.setState({
//             [name]: value,
//         });
//         return;
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         let formFields = [
//             "firstName",
//             "lastName",
//             "email",
//             "password",
//             "passwordConfirmation",
//         ];
//         let isValid = true;
//         formFields.forEach((field) => {
//             isValid = this.validateField(field) && isValid;
//         });
//         if (isValid) this.setState({ isFormSubmitted: true });
//         else this.setState({ isFormSubmitted: false });
//         return this.state.isFormSubmitted;
//     }

//     validateField(name) {
//         let isValid = false;
//         if (name === "firstName") isValid = this.validateFirstName();
//         else if (name === "lastName") isValid = this.validateLastName();
//         else if (name === "email") isValid = this.validateEmail();
//         else if (name === "password") isValid = this.validatePassword();
//         else if (name === "passwordConfirmation")
//             isValid = this.validatePasswordConfirmation();
//         return isValid;
//     }


//   validateFirstName() {
//     let firstNameError = "";
//     const value = this.state.firstName;
//     if (value.trim() === "") firstNameError = "Fisrt Name is required";
//     this.setState({
//       firstNameError
//     });
//     return firstNameError === "";
//   }
//   validatelastName() {
//     let lastNameError = "";
//     const value = this.state.lastName;
//     if (value.trim() === "") lastNameError = "Last Name is required";
//     this.setState({
//       lastNameError
//     });
//     return lastNameError === "";
//   }
//   validateEmail() {
//     let emailError = "";
//     const value = this.state.email;
//       if (value.trim() === "") emailError = "Email is required";
//       else if (!emailValidator.test(value))
//           emailError='email is not valid'
//     this.setState({
//       emailError
//     });
//     return emailError === "";
//   }
//   validatePassword() {
//     let passwordError = "";
//     const value = this.state.password;
//       if (value.trim() === "") passwordError = "password is required";
//       else if (!passwordValidator.test(value))
//           passwordError='Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!'
//     this.setState({
//       passwordError
//     });
//     return passwordError === "";
//   }
//   validatePasswordConfirmation() {
//     let passwordConfirmationError = "";
//     if(this.state.password !== this.state.passwordConfirmation)
//      passwordConfirmationError = "Password does not match Confirmation";
//     this.setState({
//       passwordConfirmationError
//     });
//     return passwordConfirmationError === "";
//   }

//     render() {
//         return (
//           <div>
//             <h3>SignUp Form</h3>
//             {this.state.isFormSubmitted ? (
//               <div>
//                 <h3>Thanks for signing up, find your details below:</h3>
//                 <div>First Name: {this.state.firstName}</div>
//                 <div>Last Name: {this.state.lastName}</div>
//                 <div>Email: {this.state.email}</div>
//               </div>
//             ) : (
//               <div>
//                 <form onSubmit={this.handleSubmit}>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     name="firstName"
//                     value={this.state.firstName}
//                     onChange={this.handleChange}
//                     onBlur={this.handleBlur}
//                     autoComplete="off"
//                   />
//                   <br />
//                   {this.state.firstNameError && (
//                     <div className={styles.errorMsg}>
//                       {this.state.firstNameError}
//                     </div>
//                   )}

//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     name="lastName"
//                     value={this.state.lastName}
//                     onChange={this.handleChange}
//                     onBlur={this.handleBlur}
//                     autoComplete="off"
//                   />
//                   <br />
//                   {this.state.lastNameError && (
//                     <div className={styles.errorMsg}>
//                       {this.state.lastNameError}
//                     </div>
//                   )}

//                   <input
//                     type="text"
//                     placeholder="Email"
//                     name="email"
//                     value={this.state.email}
//                     onChange={this.handleChange}
//                     onBlur={this.handleBlur}
//                     autoComplete="off"
//                   />
//                   <br />
//                   {this.state.emailError && (
//                     <div className={styles.errorMsg}>
//                       {this.state.emailError}
//                     </div>
//                   )}

//                   <input
//                     type="text"
//                     placeholder="Password"
//                     name="password"
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                     onBlur={this.handleBlur}
//                     autoComplete="off"
//                   />
//                   <br />
//                   {this.state.passwordError && (
//                     <div className={styles.errorMsg}>
//                       {this.state.passwordError}
//                     </div>
//                   )}

//                   <input
//                     type="text"
//                     placeholder="Confirm Password"
//                     name="passwordConfirmation"
//                     value={this.state.passwordConfirmation}
//                     onChange={this.handleChange}
//                     onBlur={this.handleBlur}
//                     autoComplete="off"
//                   />
//                   <br />
//                   {this.state.passwordConfirmationError && (
//                     <div className={styles.errorMsg}>
//                       {this.state.passwordConfirmationError}
//                     </div>
//                   )}
//                   <button>SignUp</button>
//                 </form>
//               </div>
//             )}
//           </div>
//         );
    
//     } 

//   }


// export default FormVal;