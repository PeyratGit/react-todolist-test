import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Form from './components/Form'
import '../styles/Todos.css'

const Todos = () => {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const savedTodos = localStorage.todos === undefined || localStorage.todos.length < 3 ? [{ id: 1, title: "Walk the dog", description: "In the park", isDone: false }, { id: 2, title: "Buy soda", isDone: false }] : JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(savedTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const completeTodo = (todo) => {
    setTodos (
      todos.map((todoMapped) => {
        if(todoMapped.id === todo.id) {
          return {...todoMapped, isDone: !todoMapped.isDone}
        } else {
          return(todoMapped)
        }
      })
    )
  }

  const deleteTodo = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="main-container">
      <Form title={title} setTitle={setTitle} todos={todos} setTodos={setTodos} description={description} setDescription={setDescription} />
      <div className="todos-container">
        {todos.sort((a,b) => b.id - a.id).sort((a,b) => Number(a.isDone) - Number(b.isDone)).map((todo) => {
          return(
            <div className={`todo-list-item ${todo.isDone ? "done" : ""}`} key={todo.id}>
              <Link to={`/todos/${todo.id}`} state={{ id: todo.id, title: todo.title, description: todo.description, isDone: todo.isDone }} className='todo-list-item-title'>{todo.title}</Link>
              <div className='todo-list-item-buttons'>
                <button className='mark-as-done button' onClick={() => completeTodo(todo)}>{todo.isDone ? "Undo" : "Done"}</button>
                <button className='delete button' onClick={() => deleteTodo(todo)}>Delete</button>
              </div>
              <Outlet />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todos
