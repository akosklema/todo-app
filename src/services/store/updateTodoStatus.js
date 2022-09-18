import { getTodoState, updateTodoState } from './todoState';
import saveTodosToLocalStorage from '../localStorage/saveTodosToLocalStorage';

function updateTodoStatus(todoId) {
  const todos = getTodoState();
  
  const updatedTodos = todos.map(todo => {
    let newTodoObj;
    if (todo.id === todoId) {
      newTodoObj = { ...todo, status: todo.status === 'active' ? 'completed' : 'active' }
    } else {
      newTodoObj = todo;
    }
    return newTodoObj;
  });

  updateTodoState(updatedTodos)
  saveTodosToLocalStorage(updatedTodos);
};

export default updateTodoStatus;