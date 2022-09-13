import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Todos from './components/Todos'
import Todo from './components/Todo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="todos" element={<Todos />}/>
        <Route path='todos/:id' element={<Todo />}/>
        <Route path="*" element={<div><p>Oops, nothing to see here sorry</p></div>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
