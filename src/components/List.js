import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';


export default function List({ todoData, setTodoData }) { 

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

  const handleEnd = (result) => {
    console.log(result);
    if(!result.destination) return; 
    
    const newTodoData = todoData; 

    // 변경시키는 아이템을 배열에서 지워주기 
    // return 값으로 지워진 아이템을 잡아주기 
    const [reorderedItem] = newTodoData.splice(result.source.index, 1); 

    // 원하는 자리에 reorderedItem 을 넣어주기
    newTodoData.splice(result.destination.index, 0, reorderedItem); 
    setTodoData(newTodoData); 

  }


  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
            
          {todoData.map((data, index) => (
          <Draggable
            key={data.id}
            draggableId={data.id.toString()}
            index={index}
          >
            {(provided, snapshot) => ( 
                <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                className= {`${snapshot.isDragging ? "bg-gray-400" :"bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
                > 
                    <div className="flex items-center">
                      <input type="checkbox" defaultChecked={false} onChange={() => {handleCompleteChange(data.id)}}></input>
                      <span className={ data.completed ? "line-through" : undefined }>{data.title}</span>
                    </div>
                    <div className="flex items-center">
                      <button onClick= {() => handleClick(data.id)}>X</button>
                    </div>
                  </div> 
                )}
              </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
