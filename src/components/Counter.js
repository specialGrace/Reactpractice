import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
    super(props)

    this.state = {
        count:0
    }
}

    increment() {
        this.setState((prevState) => ({
            count:prevState.count + 1
        }))
    
    
    // this.setState({
    //     count:this.state.count + 1
    // }, () => {
    //     console.log(this.state.count)
    // })
    }
    
    incrementFive() {
        this.increment()
        this.increment();
        this.increment();
        this.increment();
         this.increment();
    }
render() {
return (
  <div>
    <h2>count:{this.state.count}</h2>
    <button onClick={() => this.incrementFive()}>Greet</button>
  </div>
);
}
}
 
export { Counter }