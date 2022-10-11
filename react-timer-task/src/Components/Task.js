import React from 'react'

const Task = ({list,updateList}) => {
const  handleDelete=(id)=>{
  let mockArr=list
  const newArray = [];

  for ( let i = 0; i < mockArr.length; i++) {
      if(i !== id) {
        newArray.push(mockArr[i]);
      }
  }
  updateList(newArray)
  }
  console.log(list)
  return (
    <div>
      <div>Task</div>
     
      {list.length? list.map((item,index)=>{
        return <p key={index}> time : {item.time} , title :{item.title}   ,description: {item.description}    <button type="" onClick={()=>{
          handleDelete(index)
        }} >delete</button> </p>
      }):""}


    </div>
  )
}

export default Task