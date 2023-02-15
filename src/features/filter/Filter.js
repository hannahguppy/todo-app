import { useDispatch, useSelector } from 'react-redux';

import { filterNone, filterCompleted, filterIncompleted } from './filterSlice';

const Filter = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todo)

  const handleFilterNone = todos => {
    dispatch(filterNone(todos))
  }

  const handleFilterCompleted = todos => {
    dispatch(filterCompleted(todos))
  }

  const handleFilterIncompleted = todos => {
    dispatch(filterIncompleted(todos))
  }

  return (    
    <div>
      <button 
        type="reset" 
        className="btn btn-sm btn-primary"
        onClick={() => handleFilterNone(todos)}>
        All
      </button>        
      <button 
        type="submit" 
        className="btn btn-sm btn-primary"
        onClick={() => handleFilterCompleted(todos)}>
        Completed
      </button>        
      <button 
        type="submit" 
        className="btn btn-sm btn-primary"
        onClick={() => handleFilterIncompleted(todos)}>
        Incompleted
      </button>        
    </div>
  )
}

export default Filter