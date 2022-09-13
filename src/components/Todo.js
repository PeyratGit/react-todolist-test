import React from 'react'
import { useLocation } from "react-router-dom";

const Todo = () => {
  const location = useLocation()
  const { id, title, description, isDone } = location.state
  return (
    <div className="todo-card">
      <div className="todo-id">#{id}</div>
      <h3>{title}</h3>
      <div className="separator"></div>
      <p>{description}</p>
      <p className={`status ${isDone ? "done" : "not-done"}`}>{isDone ? "DONE" : "NOT DONE"}</p>
    </div>
  )
}

export default Todo
