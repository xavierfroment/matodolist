
import React from 'react'
import { FaCheck, FaEdit, FaTimes, FaTrash } from 'react-icons/fa'

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id) {
          return{...item, completed: !item.completed};
        }
        return item;
      })
    )
  }
  
  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo)
  }

  return (
    <div className="group-list">
      {todos.map((todo) => (
        <li 
          key={todo.id}
          className="list-item"
        >
          <input
            type="text" 
            value={todo.title} 
            onChange={(e) => e.preventDefault()}
            disabled
            className={`input-list ${!todo.completed ? ("not-completed") : ("completed")}`}
          />
          <button 
            onClick={() => handleComplete(todo)}
            className={`${!todo.completed ? ("completed-btn") : ("not-completed-btn")}`}
          >
            {!todo.completed ? (
              <FaCheck/>
            ) : (
              <FaTimes/>
            )}
          </button>
          <button 
            onClick={() => handleEdit(todo)}
            className="edit-btn"
          >
            <FaEdit/>
          </button>
          <button 
            onClick={() => handleDelete(todo)}
            className="delete-btn"
          >
            <FaTrash/>
          </button>
        </li>
      ))}
      <br/>
    </div>
  )
}

export default TodosList
