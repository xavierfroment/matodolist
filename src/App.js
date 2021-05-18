import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import TodosList from './components/TodosList'
import './App.css';
import Footer from './components/system/Footer';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  // const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <div className="App">
      <div>
        <Header/>
      </div>
      <br/>
      <div>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
