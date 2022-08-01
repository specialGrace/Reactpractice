import React from 'react'
import Friends from './Friends'

function Item({ student }) {
    console.log(student)
    return (
        <div>
            <h4>{student.id}</h4>
            <h4>{student.name}</h4>
            <h4>{student.age}</h4>
            <div>
                <Friends friends = {student.friends}/>
            </div>
        </div>
    )

}

export default Item