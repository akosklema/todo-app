function saveTodosToLocalStorage(todoList) {
  localStorage.setItem('todos', JSON.stringify(todoList));
};

export default saveTodosToLocalStorage;