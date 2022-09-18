import { getTodoState, updateTodoState } from './todoState';
import getTodo from './getTodo';
import saveTodosToLocalStorage from '../localStorage/saveTodosToLocalStorage';

function changeTodoOrder(todoAId, todoBId) {
  const todos = getTodoState();

  const todoA = getTodo(todoAId);
  const todoB = getTodo(todoBId);

  const updatedTodos = todos.map(todo => {
    if (todo.id === todoA.id) {
      return { ...todo, place: todoB.place };
    } else if (todo.id === todoB.id) {
      return { ...todo, place: todoA.place }
    } else {
      return { ...todo }
    }
  });

  updateTodoState(updatedTodos);
  saveTodosToLocalStorage(updatedTodos);
};

export default changeTodoOrder;