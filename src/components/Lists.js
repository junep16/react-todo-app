import React from 'react'
import List from "./List";
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';


export default function Lists({ todoData, setTodoData }) { 


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
              <List
                key={data.id}
                id={data.id}
                title={data.title}
                completed={data.completed}
                todoData={todoData}
                setTodoData={setTodoData}
                provided={provided}
                snapshot={snapshot}
              />
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
