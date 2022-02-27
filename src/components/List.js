import React from 'react'


export default function List({ todoData, setTodoData }) {

  const btnStyle = {
    color: "#FFF", 
    border: "none", 
    padding: "5px 9px", 
    borderRadius: "50%", 
    cursor: "pointer", 
    float: "right"
  }

  const getStyle = (completed) => {
    return {
      padding: "10px", 
      borderBottom: "1px #CCC dotted", 
      textDecoration: completed ? "line-through" : "none"
    }
  }

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
    <div>
      {todoData.map((data) => (
            <div style={getStyle(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange={() => {handleCompleteChange(data.id)}}></input>
              {data.title} 
              <button style={btnStyle} onClick= {() => handleClick(data.id)}>X</button>
            </div> 
      ))}
    </div>
  )
}
