
import React, { Component } from 'react'

export default class Welcome extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message:'Greet Guest' 
    }
  }

  handleClick() {
    this.setState({
      message: 'You are welcome'
    })
  }
  
  render() {
    return (
      <div>
        <h1>Hello{this.state.message}</h1>
        <p>{this.props.name}</p>
        <button onClick={()=> this.handleClick()}>Greet</button>

      </div>
    )
  }
}

export {Welcome}