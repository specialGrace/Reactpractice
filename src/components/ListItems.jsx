// import React from 'react'
import React from 'react'
import Item from './Item.jsx'

// create an array of student with id name, age and friends
function ListItems() {
    const students = [
        { id: 1, name: "Dammy", age: 20, friends: ["Tomi", "Henny", "Bridget"] },
        { id: 2, name: "Samuel", age: 20, friends: ["Wale", "Toheeb", "Ire"] },
        { id: 3, name: "Favour", age: 20, friends: ["Nathaniel", "Pelumi", "Paulinus"] }
    ]
    return (
        <div>
            {
                students.map((student) => (
                   <Item key={student.id} student={student}/>
                )
                )
            }
        </div>
    )
}

// function ListItems() {
//     const myList = [{ id: 1, fruit: 'orange' }, { id: 2, fruit: 'mango' }, { id: 3, fruit: 'banana' }]
    
//     const result = myList.map((item) => (<h2>{item.fruit}</h2>))
//     return result

//     // OR
// //   return (
// //       <div>
// //           {
// //               myList.map((item) => (<h2>{item.fruit}</h2>))
// //           }
// //     </div>
// //   )
// }





export default ListItems