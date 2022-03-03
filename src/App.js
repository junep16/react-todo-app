import React, { useState, useCallback } from "react";  
import "./App.css"; 
import Form from "./components/Form";
import Lists from "./components/Lists";

export default function App() {
  console.log('app component'); 

  const [todoData, setTodoData] = useState([]); 
  const [value, setValue] = useState(""); 

  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id); 
    setTodoData(newTodoData); 
  },[todoData]
  );

  const handleSubmit = (e) => {
    e.preventDefault(); 

  // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(), 
      title: value, 
      completed: false, 
    } 

  // 원래 있던 할 일에 새로운 할 일 더해주기 
    setTodoData(prev => [...prev, newTodo]); 
    setValue(""); 
  }

  // 전체 삭제해주기
  const deleteListItems = (e) => {  
    let resetTodoData = [];  
    setTodoData(resetTodoData); 
  }

    return (
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-6 m-4 bg-white rounded shadow-sm lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1 className="">✅ TO DO</h1>
            <button onClick={deleteListItems} className="bg-gray-100 rounded w-24 hover:opacity-30" type="button">모두 지우기</button>
          </div>
          <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
        </div>
      </div>
    )
  }
