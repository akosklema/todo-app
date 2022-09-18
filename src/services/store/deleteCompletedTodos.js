import { getTodoState, updateTodoState } from './todoState';
import saveTodosToLocalStorage from '../localStorage/saveTodosToLocalStorage';

function deleteCompletedTodos() {
  const todos = getTodoState();

  const updatedTodos = todos.filter(todo => todo.status === 'active');

  updatedTodos.forEach((todo, index) => todo.place = index + 1);

  updateTodoState(updatedTodos);
  saveTodosToLocalStorage(updatedTodos);
};

export default deleteCompletedTodos;