import React from 'react'


function ListMap() {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div>
            <h2>List items</h2>
            <ul>
                <Numbers numbers={numbers}/>
            </ul>
        </div>
  )
}

const Numbers = (props) => {
    return (
        <>
            {
                props.numbers.map((number, i) => (<li key={i}>{number}</li>))
            }
        </>
    )
}
export default ListMap