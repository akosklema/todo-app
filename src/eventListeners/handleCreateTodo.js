import saveTodo from '../services/store/saveTodo';
import getTodosCount from '../services/localStorage/getTodosCount';
import TodoItem from '../components/TodoItem/TodoItem';
import updateItemsLeftCounter from '../utils/updateItemsLeftCounter';
import redirect from '../utils/redirect';
import { theme } from './switchTheme';

import todoItemClasses from '../components/TodoItem/TodoItem.module.css';
import fetchTodos from './fetchTodos';

function handleCreateTodo(event, inputValue) {
  event.preventDefault();

  const newTodoData = {
    id: Date.now(),
    content: inputValue,
    status: 'active',
    place : getTodosCount() + 1
  };

  saveTodo(newTodoData);
  const todoItemComponent = TodoItem(newTodoData);

  updateItemsLeftCounter(1);
  
  const todoList = document.getElementById('todo-list');

  if (theme === 'dark') {
    todoItemComponent.classList.add(todoItemClasses['dark-mode']);
    todoItemComponent.querySelector(`.${todoItemClasses['complete-todo-button']}`)
      .classList.add(todoItemClasses['dark-mode']);
    todoItemComponent.querySelector(`.${todoItemClasses['todo-item-content']}`)
      .classList.add(todoItemClasses['dark-mode']);
  }

  todoList.append(todoItemComponent);
  
  const url = new URL(window.location);
  url.searchParams.delete('filter');
  redirect(url);
  fetchTodos();
};

export default handleCreateTodo;