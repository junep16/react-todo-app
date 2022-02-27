import React from 'react'

const List = ({
  id, 
  title, 
  completed, 
  todoData, 
  setTodoData,
  provided, 
  snapshot
}) => {

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    console.log("newTodoData", newTodoData);  
    setTodoData(newTodoData)
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed; 
      }
      return data; 
    })
    setTodoData(newTodoData);  
    // 로컬에 저장 
    // window.localStorage.setItem("newTodoData", JSON.stringify(newTodoData)); 
  }


  return (
    <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
          className= {`${snapshot.isDragging ? "bg-gray-400" :"bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
          > 
          <div className="flex items-center">
            <input type="checkbox" defaultChecked={false} onChange={() => {handleCompleteChange(id)}}></input>
            <span className={ completed ? "line-through" : undefined }>{title}</span>
          </div>
          <div className="flex items-center">
            <button onClick= {() => handleClick(id)}>X</button>
          </div>
    </div>  
  )
}

export default List; 

