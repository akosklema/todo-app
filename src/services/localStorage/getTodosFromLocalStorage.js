function getTodosFromLocalStorage() {
  const todosInLocalStorage = JSON.parse(localStorage.getItem('todos'));
  if (todosInLocalStorage) {
    return todosInLocalStorage;
  } else {
    return [];
  }
};

export default getTodosFromLocalStorage;