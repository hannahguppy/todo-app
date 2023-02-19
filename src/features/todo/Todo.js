import { useDispatch, useSelector } from 'react-redux'

import TodoList from '../../components/TodoList'
import { addTodo, removeTodo, checkTodo } from './todoSlice'
import Filter from '../filter/Filter'
import { filterNone } from '../filter/filterSlice'

const Todo = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todo)
  dispatch(filterNone(todos)) // to subcribe filter to todo

  const handleAdd = e => {
    e.preventDefault()
    const todo = {
      id: Date.now(),
      name: document.forms["addTodoForm"]["taskName"].value,
      note: document.forms["addTodoForm"]["note"].value,
      isCompleted: false
    }
    dispatch(addTodo(todo))    
  }
  
  const handleClick = todo => {
    dispatch(checkTodo(todo))
  }

  const handleDelete = todo => {
    dispatch(removeTodo(todo))
  }

  return(
    <div>
      <form name='addTodoForm' id='addTodoForm' onSubmit={handleAdd}>
        <div>
          <label>Task Name</label>
          <input type='text' name='taskName' required/>
        </div>
        <div>
          <label>Note</label>
          <input type='text' name='note'/>
        </div>
        <div className='add-todo-btn'>
          <button 
            type="submit" 
            className="">
              Add Todo
          </button>
        </div>
      </form>

      {(todos.length == 0)? '' : 
        <div>
          <Filter />
          <TodoList 
            clickHandler={handleClick}
            deleteHandler={handleDelete}
          />
        </div>
      }
    </div>
  )
} 

export default Todo