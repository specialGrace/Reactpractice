import React from 'react'

function Stylesheet({ colorName }) {
    const style = colorName ? colorName : ''
    console.log(style)
  return (
      <div>
          <h1 className='heading'>Heading one</h1>
          <h3 className={`${style} font-xl`}>this is a dynamic style</h3>
    </div>
  )
}

export default Stylesheet