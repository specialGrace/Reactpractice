// // using html5 format
// import React, { Component } from 'react'
//  import  ReactDom  from 'react-dom'

// class FormValidation extends Component {
//      constructor(props) {
//        super(props)
     
//        this.state = {
//            firstName: '',
//            touched:{firstName:false}
//          }
//       this.handleChange=this.handleChange.bind(this);
//     }
//        handleBlur(e){
//              const { name } = e.target
//              this.setState({
//                touched: { ...this.state.touched, [name]: true }
//              });
//     }
//     validate = () => {
//         const errors = {
//             errorFirstName: '',
//         }
//         if ((this.state.touched.firstName && this.state.touched.firstName.length < 3) ||
//             (this.state.touched.firstName && this.state.touched.firstName.length > 12)) {
//             errors.errorFirstName='name should be between 3 and 12'
//         }
//         return errors
//     } 

//     handleChange (e) {
//         const { name, value } = e.target
//         console.log(name, value)
//         this.setState({
//             [name]:value
//         })
//     }
//     submitHandler(e) {
//         e.preventDefault()
//     }
//     render() {
//     const {errorFirstName}= this.validate()
//     return (
//       <div>
//         <form noValidate onSubmit={this.submitHandler}>
//                 {errorFirstName && <p> error: { errorFirstName}</p>}
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={this.state.firstName}
//             placeholder="first Name"
//             onChange={this.handleChange}
//             onBlur={this.handleBlur.bind(this)}
//           />
//           <button>submit</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default FormValidation