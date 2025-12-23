import React, { useState } from 'react'

const App = () => {

  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);


  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleAddButton = (e) => {
    e.preventDefault();

    if(input.trim() === "") return

    setTask([...task, input]);
    setInput("");
  }

  const handleDeleteBtn = (id) => {
    const deleteTask = task.filter((_, i) => i !== id)
    setTask(deleteTask);
  }

  return (
    <>
      <h1>TODO LIST</h1>
      <form onSubmit={handleAddButton}>
        <input type="text" required placeholder='Enter your task here...' value={input} onChange={handleInput} />
        <button>Add</button>
      </form>

      {task.length > 0 ? (
        <ul>
          {task.map((t, i) => (
            <li key={i}>{t} <button onClick={() => handleDeleteBtn(i)}>Delete</button></li>
          ))}
        </ul>
      ) : (
        <p>No Task added yet</p>
      )}

    </>
  )
}

export default App
