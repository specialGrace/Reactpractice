
import React from 'react'

function Inline() {
    const heading = {
        color: "#ffffff",
        backgroundColor: 'purple'
    }
    const styles = {
        h4: {
            color: 'yellow'
        },
        pra: {
            fontSize: '30px',
            color:'red'
        }
}
  return (
      <div>
          <p style={{ color: '#ffffff', backgroundColor: 'red' }}>This is an inline styling</p>
          <h3 style={heading}>Another way of inline style</h3>
          <h4 style={styles.h4}>Another</h4>
          <p style={styles.pra}>Extra paragraph</p>
    </div>
  )
}

export default Inline