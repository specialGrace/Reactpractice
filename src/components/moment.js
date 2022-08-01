import React, { Component } from 'react'


class Moment extends Component {
  render() {
    return (
      <div className='App'>
        <h1>How to use moment</h1>
        <p>This challenge was started {Moment('2020-10-01').fromNow()}</p>
        <p>The challenge will be over in {Moment('2020-10-30').fromNow()}</p>
        <p>Today is {Moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
      </div>
    )
  }
}

export default Moment