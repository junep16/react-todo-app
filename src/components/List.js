import React, { useRef } from 'react'

const List = React.memo(({
  id, 
  title, 
  completed, 
  todoData, 
  setTodoData,
  provided, 
  snapshot, 
  handleClick
}) => {

  console.log('list component'); 

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


  // 리스트 수정 기능
  const listText = useRef(); 
  const editInput = useRef(); 
  const editButton = useRef(); 
  
  const editListItem = (e) => {
    // 인풋 hidden 제거
    editInput.current.classList.remove("hidden");
    editButton.current.classList.remove("hidden"); 
    listText.current.classList.add("hidden"); 
    
    // 수정 전 텍스트 인풋에 넣어주기
    let currentListText = listText.current.innerText;
    editInput.current.placeholder = currentListText; 
    
    // 인풋에 작성한 텍스트 title로 넣어주기.. 
    title = "이걸로 바꾼다 이게 뭐냐면 새롭게 작성한거"; 
    
  }

  return (
    <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
          className= {`${snapshot.isDragging ? "bg-gray-400" :"bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
          > 
          <div className="flex items-center">
            <input type="checkbox" defaultChecked={false} onChange={() => {handleCompleteChange(id)}}></input>
            <span className={ completed ? "line-through" : undefined } onClick={editListItem} ref={listText}>{title}</span>
            <input className="hidden ml-1 rounded pl-2" type="text" placeholder={"입력"}
            ref={editInput}></input>
            <button className="hidden ml-1 rounded bg-blue-100" ref={editButton}>수정</button>
          </div>
          <div className="flex items-center">
            <button onClick= {() => handleClick(id)}>X</button>
          </div>
    </div>  
  )
});

export default List; 

