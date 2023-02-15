import { useDispatch } from 'react-redux'

import TodoList from '../../components/TodoList'
import { 
  addTodo, removeTodo, checkTodo,
  filterNone, filterCompleted, filterIncompleted  
} from './todoSlice'

const Todo = () => {
  const dispatch = useDispatch()

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

  const handleFilterNone = e => {
    e.preventDefault()
    dispatch(filterNone())
  }

  const handleFilterCompleted = e => {
    e.preventDefault()
    dispatch(filterCompleted())
  }

  const handleFilterIncompleted = e => {
    e.preventDefault()
    dispatch(filterIncompleted())
  }

  return(
    <div>
      <form name='addTodoForm' id='addTodoForm' onSubmit={handleAdd}>
        <div>
          <label>Task Name</label>
          <input type='text' name='taskName'/>
        </div>
        <div>
          <label>Note</label>
          <input type='text' name='note'/>
        </div>
        <button 
          type="submit" 
          className="btn btn-sm">
            Add Todo
        </button>
      </form>

      <div>
        <button 
          type="submit" 
          className="btn btn-sm btn-primary"
          onClick={handleFilterNone}>
          All
        </button>        
        <button 
          type="submit" 
          className="btn btn-sm btn-primary"
          onClick={handleFilterCompleted}>
          Completed
        </button>        
        <button 
          type="submit" 
          className="btn btn-sm btn-primary"
          onClick={handleFilterIncompleted}>
          Incompleted
        </button>        
      </div>

      <TodoList 
        clickHandler={handleClick}
        deleteHandler={handleDelete}
      />
    </div>
  )
} 

export default Todo