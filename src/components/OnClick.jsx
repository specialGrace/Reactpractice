
// import React, { Component } from 'react'

//  class OnClick extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
      
//     }
//   }
//   clickHandler(id) {
//     console.log(id)
//   }
//   render() {
//     const myList = [{ id: 1, fruit: 'orange' }, { id: 2, fruit: 'mango' }, { id: 3, fruit: 'Banana' }]
//     return (
//       <div>
//         {myList.map((item) => (<div> {item.fruit}
//           {item.id}{item.fruit}
//         <button onClick={this.clickHandler.bind(this, item.id)}>Click</button>
//         </div>
//         ))}
//         </div>
//     )
//   }
// }
// export default OnClick;

import React, { Component } from 'react'

export default class onClick extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ok:true
    }
  }
  clickHandler() {
    this.setState((prev) => ({
      ok:!prev.ok
    }))
  }
  render() {
    return (
      <div>
        {this.state.ok ? 'yes, ok' : 'No, Not ok'}
        <button onClick={this.clickHandler.bind(this)}>change state</button>
      </div>
    )
  }
}



// import React from 'react'

// function OnClick() {
//   const onclickHandler = (e) => {
//     e.preventDefault()
//     console.log("I'm clicked")
//   }
//   return (
//     <div>
//       <button onClick={onclickHandler}>Click Me</button>
//     </div>
//   )
// }

// export default OnClick

