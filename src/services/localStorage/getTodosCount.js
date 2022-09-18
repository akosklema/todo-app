import getTodosFromLocalStorage from './getTodosFromLocalStorage';

function getTodosCount() {
  return getTodosFromLocalStorage().length;
};

export default getTodosCount;