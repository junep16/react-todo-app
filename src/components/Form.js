import React from 'react'

export default function Form( {handleSubmit, value, setValue} ) {
  console.log('form component'); 
  const handleChange = (e) => {  
    setValue(e.target.value); 
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex pt-2">
        <input
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow-sm"
          type="text"
          name="value"
          placeholder="해야할 일을 입력해주세요"
          value={value}
          onChange={handleChange}
        />
        <input
          className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white"
          type="submit"
          value="입력" 
        />
      </form>
    </div>
  )
}
