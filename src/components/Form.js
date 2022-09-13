import React from 'react'
import { useState } from 'react'

const Form = ({ todos, setTodos }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: todos.length + 1, title: title, description: description, isDone: false }]);
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={formSubmit}>
      <input type="text" placeholder='Task title' className='form-input' value={title} required onChange={handleTitle} />
      <input type="text" placeholder='Task description' className='form-input' value={description} onChange={handleDescription} />
      <button type='submit'>
        Add
      </button>
    </form>
  )
}

export default Form
