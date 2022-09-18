import { getTodoState, updateTodoState } from './todoState';
import saveTodosToLocalStorage from '../localStorage/saveTodosToLocalStorage';

function deleteTodo(todoId) {
  const todos = getTodoState();

  let deletedTodoPlace;
  const updatedTodos = todos.filter(todo => {
    if (todo.id === todoId) {
      deletedTodoPlace = todo.place;
    }
    return todo.id !== todoId;
  });

  updatedTodos.forEach((todo) => {
    if (todo.place > deletedTodoPlace) {
      todo.place -= 1;
    }
  });

  updateTodoState(updatedTodos);
  saveTodosToLocalStorage(updatedTodos);
};

export default deleteTodo;