import React, { useEffect } from 'react'
import {v4 as uuidV4 } from 'uuid'
import { FaEdit, FaPlus } from 'react-icons/fa'

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

  useEffect(() => {
    if(editTodo) {
      setInput(editTodo.title)
    } else {
      setInput("")
    }
  },[setInput, editTodo])

  const onInputChange = (e) => {
    setInput(e.target.value);
  }

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => (
      todo.id === id ? {title, id, completed} : todo
    ))
    setTodos(newTodo);
    setEditTodo("");
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!editTodo) {
      setTodos([...todos, {id: uuidV4(), title: input, completed: false}]);
      setInput("")
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input 
          type="text" 
          value={input}
          placeholder="Entrer une tâche"
          required
          onChange={onInputChange}
          className="input-form"
        />
        <button 
          type="submit"
          className={`${editTodo ? ("edit-btn") : ("completed-btn")}`}
        >
          {editTodo ? (<FaEdit/>) : (<FaPlus/>)}
        </button>
      </form>
      {todos.length === 0 ? (<h4>Vous n'avez aucune tâche en cours</h4>) : (<h4>Vous avez {todos.length} {todos.length > 1 ? (" tâches ") : (" tâche " )} à faire</h4> )}
    </>
  )
}

export default Form
