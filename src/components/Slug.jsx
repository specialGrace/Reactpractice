import React, { Component } from 'react'

export default class Slug extends Component {
    constructor(props) {
    super(props)
    
    this.state = {
        submitted:'Not yet submitted'
        }
        this.submitHandler=this.submitHandler.bind(this)
    }

    submitHandler(e) {
        e.preventDefault()
        console.log('submit')
        this.setState({
            submitted:'it has been submitted'
        })
    }
    render() {
        return (
        <div>
            <form onSubmit={this.submitHandler}>
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
        </div>
        );

    }
}
