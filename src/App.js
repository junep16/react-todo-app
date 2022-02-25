import React, { useState } from "react";  
import "./App.css"; 

export default function App() {
  
  const [todoData, setTodoData] = useState([]); 
  const [value, setValue] = useState(""); 


  btnStyle = {
    color: "#FFF", 
    border: "none", 
    padding: "5px 9px", 
    borderRadius: "50%", 
    cursor: "pointer", 
    float: "right"
  }

  getStyle = (completed) => {
    return {
      padding: "10px", 
      borderBottom: "1px #CCC dotted", 
      textDecoration: completed ? "line-through" : "none"
    }
  }

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id)
    console.log("newTodoData", newTodoData); 
    this.setState({todoData: newTodoData}); 
  };

  handleChange = (e) => {  
    this.setState({value : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault(); 

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(), 
      title: this.state.value, 
      completed: false, 
    }

    // 원래 있던 할 일에 새로운 할 일 더해주기 
    this.setState({ todoData: [...this.state.todoData, newTodo], value: ""}); 
  }
  
  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed; 
      }
      return data; 
    })

    this.setState({ todoData: newTodoData}); 
    // 로컬에 저장 
    // window.localStorage.setItem("newTodoData", JSON.stringify(newTodoData)); 
  }
  

{
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>✅ TO DO</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange={() => { this.handleCompleteChange(data.id)}}></input>
              {data.title} 
              <button style={this.btnStyle} onClick= {() => this.handleClick(data.id)}>X</button>
            </div> 
          ))}
          <form style={{ display: "flex"}} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{flex: "10", padding: "5px"}}
              placeholder="해야할 일을 입력해주세요"
              value={this.state.value}
              onChange={this.handleChange}
            /> 
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{flex:1}}
            />
          </form>
        </div>
      </div>
    )
  }
}