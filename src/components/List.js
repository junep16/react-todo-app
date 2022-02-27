import React from 'react'


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


  return (
    <div>
      {todoData.map((data) => (
            <div key={data.id}>
              <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">

                <div className="flex items-center">
                  <input type="checkbox" defaultChecked={false} onChange={() => {handleCompleteChange(data.id)}}></input>
                  <span className={ data.completed ? "line-through" : undefined }>{data.title}</span>
                </div>
                
                <div className="flex items-center">
                  <button onClick= {() => handleClick(data.id)}>X</button>
                </div>

              </div>
            </div> 
      ))}
    </div>
  )
}
