import React, { Component } from 'react'

export default class Checkbox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          skills: {
              html: false,
              css: false,
              javascript: false,
         },
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value, type } = e.target;
        console.log(name, value)
        
            if(type ==='checkbox') {
            this.setState({
                skills: {
                        ...this.state.skills,[name]:value
                    }
                },()=>console.log(this.state.skills))
            }
    }
  render() {
    return (
        <div>
            <form>
                <div>
                    <p>Select your skills</p>

                </div>

            </form>
      </div>
    )
  }
}
