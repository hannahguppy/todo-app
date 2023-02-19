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
    <div className='filter-button-bar'>
      <button 
        type="reset" 
        className="filter-btn"
        onClick={() => handleFilterNone(todos)}>
        All
      </button>        
      <button 
        type="submit" 
        className="filter-btn"
        onClick={() => handleFilterCompleted(todos)}>
        Completed
      </button>        
      <button 
        type="submit" 
        className="filter-btn"
        onClick={() => handleFilterIncompleted(todos)}>
        Incompleted
      </button>        
    </div>
  )
}

export default Filter