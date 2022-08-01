import React,{Component} from 'react'

class LifeCycleN extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log('Constructor method invokes first - LifeCycleN')
    }

    static getDerivedStateFromProps(){
        console.log(' getDerivedStateFromProps method invokes 2nd - LifeCycleN')
        return null
    }

    componentDidMount(){
        console.log(' componentDidMount method invokes last - LifeCycleN')
    }
    
    render(){
        console.log('render method invokes 3rd - LifeCycleN')
        return (
            <div>
                <h4>LifeCycle Methods - Mounting phase Order</h4>
            </div>
        )
    }
}

export default LifeCycleN