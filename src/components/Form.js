import React from 'react'

export default function Form( handleSubmit, value, setValue ) {

  const handleChange = (e) => {  
    setValue(e.target.value); 
  }

  return (
    <div>
      <form style={{ display: "flex"}} onSubmit={handleSubmit}>
            <input
              type="text"
              name="value"
              style={{flex: "10", padding: "5px"}}
              placeholder="해야할 일을 입력해주세요"
              value={value}
              onChange={handleChange}
              />
      </form>
    </div>
  )
}
