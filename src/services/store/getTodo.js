import { getTodoState } from './todoState';

function getTodo(todoId) {
  return getTodoState().find(todo => todo.id === todoId);
};

export default getTodo;