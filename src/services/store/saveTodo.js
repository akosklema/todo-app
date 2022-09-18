import { getTodoState, updateTodoState } from './todoState';
import saveTodosToLocalStorage from '../localStorage/saveTodosToLocalStorage';

function saveTodo(todo) {
  const todos = getTodoState();
  todos.push(todo);
  updateTodoState(todos);
  saveTodosToLocalStorage(todos);
};

export default saveTodo;