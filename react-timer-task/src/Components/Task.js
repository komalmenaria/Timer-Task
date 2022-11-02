import React from 'react'

const Task = ({ list, updateList }) => {
  const handleDelete = (id) => {
    let mockArr = list
    const newArray = [];

    for (let i = 0; i < mockArr.length; i++) {
      if (i !== id) {
        newArray.push(mockArr[i]);
      }
    }
    updateList(newArray)
  }
  console.log(list)
  return (
    <div className='container'>
      <h2 className='my-3' >Task</h2>

     <div className="container d-flex flex-rap ">
     {list.length ? list.map((item, index) => {
        return <div  className='container d-flex flex-column my-3 task-list ' style={{width:"400px"}} key={index}>
          <span> Time : {item.time}</span>
          <span>Title :{item.title}</span>
          <span> Description: {item.description}  </span>
          <button type="button" className='btn btn-danger my-3 ' onClick={() => {
            handleDelete(index)
          }} >Delete</button> </div>
      }) : ""}
     </div>


    </div>
  )
}

export default Task