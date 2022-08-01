import React,{Component} from 'react'
import LifeCycleN from './LifeCycleN'

class LifeCycleM extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isSet:false
      }
      console.log('Constructor method invokes first')
    }

    static getDerivedStateFromProps(){
        console.log(' getDerivedStateFromProps method invokes 2nd')
        return null
    }

    componentDidMount(){
        console.log(' componentDidMount method invokes last')
    }

    shouldComponentUpdate(){
        console.log(' shouldComponentUpdat method invokes - lifeCycleM')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate method invokes - lifeCycleM')
        return null

    }

    componentDidUpdate(prevState, prevProps){
        console.log(' componentDidUpdate method invokes - LifeCycleM')
    }
    
    render(){
        console.log('render method invokes 3rd')
        return (
            <div>
                <h4>LifeCycle Methods - Mounting phase Order</h4>
                <button onClick={()=> this.setState({isSet:true})}>change state</button>
                <LifeCycleN />
            </div>
        )
    }
}

export default LifeCycleM