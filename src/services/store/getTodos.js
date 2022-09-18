import getTodosFromLocalStorage from '../localStorage/getTodosFromLocalStorage';
import { getTodoState, updateTodoState } from './todoState';

function getTodos(filter) {
  updateTodoState(getTodosFromLocalStorage());

  const todoState = getTodoState().sort((a, b) => a.place - b.place);
  
  if (filter === 'active') {
    return todoState.filter(todo => todo.status === 'active');
  } else if (filter === 'completed') {
    return todoState.filter(todo => todo.status === 'completed');
  }

  return todoState;
};

export default getTodos;