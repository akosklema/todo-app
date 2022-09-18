import handleCompleteTodo from '../eventListeners/handleCompleteTodo';
import handleDeleteTodo from '../eventListeners/handleDeleteTodo';

import todoItemClasses from '../components/TodoItem/TodoItem.module.css';

function setClickEvents(todoItem) {
  const completeButton = todoItem.querySelector(`.${todoItemClasses['complete-todo-button']}`);
  const deleteButton = todoItem.querySelector(`.${todoItemClasses['delete-todo-button']}`);

  completeButton.addEventListener('click', () => {
    handleCompleteTodo(todoItem);
  });

  deleteButton.addEventListener('click', () => {
    handleDeleteTodo(todoItem);
  });
};

export default setClickEvents;