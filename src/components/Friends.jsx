import React from 'react'

function Friends({ friends }) {
    console.log('friend', friends)
  return (
      <div>
          {friends.map((friend, i) => <p key={i}>{friend}</p>)} 
    </div>
  )
}

export default Friends