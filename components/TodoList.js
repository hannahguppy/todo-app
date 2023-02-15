import { useSelector } from 'react-redux'

const TodoList = ({clickHandler, deleteHandler}) => {
  const todos = useSelector(state => state.todo.showedTodos)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task Name</th>
            <th>Note</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => (
            <tr className={todo.isCompleted? 'completed' : ''}>
              <td>{i+1}</td>
              <td>{todo.name}</td>
              <td>{todo.note}</td>
              <td>
                <input 
                type="checkbox" name="checkComplete" id="checkComplete" 
                onClick={() => clickHandler(todo)} />
              </td>
              <td>
                <button 
                type="reset"
                onClick={() => deleteHandler(todo)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList