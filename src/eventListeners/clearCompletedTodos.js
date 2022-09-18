import deleteCompletedTodos from '../services/store/deleteCompletedTodos';

function clearCompletedTodos() {
  const todosToDelete = document.querySelectorAll('[data-status="completed"]');
  todosToDelete.forEach(todoElement => todoElement.remove());
  deleteCompletedTodos();
};

export default clearCompletedTodos;