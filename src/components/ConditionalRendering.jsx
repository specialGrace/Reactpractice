import React, { Component } from "react";

export default class Conditional_Rendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const a = [{ name: "Peter" }];
    //  Using Ampasand &&
    return (
      this.state.isLoggedIn &&
      a.length > 0 && <div>Welcome John {a[0].name}</div>
    );

    // 4. Using short circuit
    // return this.state.isLoggedIn && a.length > 0? (<div>Welcome John {a[0].name}</div>) : null
    // 3. Using variable
    // let res;
    // if(this.state.isLoggedIn){
    //     res = (<div>Welcome John</div>)
    // }else{
    //     res = (<div>Welcome Guest</div>)
    // }
    // return res

    // const result = this.state.isLoggedIn ? (<div>Welcome John</div>) : (<div>Welcome Guest</div>)
    // return result

    // 2. Using ternary operators
    // return this.state.isLoggedIn ? (<div>Welcome John</div>) : (<div>Welcome Guest</div>)

    // 1. Using IF/ELSE
    // if(this.state.isLoggedIn){
    //     return (<div>Welcome John</div>)
    // }else{
    //     return  (<div>Welcome Guest</div>)
    // }
  }
}
