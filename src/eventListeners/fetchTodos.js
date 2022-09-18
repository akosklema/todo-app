import getTodos from '../services/store/getTodos';

import TodoItem from '../components/TodoItem/TodoItem';
import updateItemsLeftCounter from '../utils/updateItemsLeftCounter';
import getQueryFilterParam from '../utils/getQueryFilterParam';
import redirect from '../utils/redirect';

import { theme } from '../eventListeners/switchTheme';

import todoLayoutClasses from '../components/TodosLayoutContainer/TodosLayoutContainer.module.css';
import todoItemClasses from '../components/TodoItem/TodoItem.module.css';

function fetchTodos() {
  const filterParam = getQueryFilterParam(window.location.href);

  document.querySelectorAll(`[data-filter]`).forEach((button) => {
    button.classList.remove(todoLayoutClasses['filter-button--active']);
  });

  let activeFilterButtonList;
  if (['active', 'completed'].includes(filterParam)) {
    activeFilterButtonList = document.querySelectorAll(`[data-filter=${filterParam}]`);  
  } else {
    activeFilterButtonList = document.querySelectorAll(`[data-filter=all]`);  
    const url = new URL(window.location);
    url.searchParams.delete('filter');
    redirect(url);
  }

  activeFilterButtonList.forEach((button) => {
    button.classList.add(todoLayoutClasses['filter-button--active']);
  });
  
  const todos = getTodos(filterParam);

  if (!todos) {
    return;
  }

  const activeTodos = getTodos().filter(todo => todo.status === 'active');
  updateItemsLeftCounter(activeTodos.length, true);

  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const todoItem = TodoItem(todo);
    if (theme === 'dark') {
      todoItem.classList.add(todoItemClasses['dark-mode']);
      todoItem.querySelector(`.${todoItemClasses['complete-todo-button']}`)
        .classList.add(todoItemClasses['dark-mode']);
      todoItem.querySelector(`.${todoItemClasses['todo-item-content']}`)
        .classList.add(todoItemClasses['dark-mode']);
    }
    todoList.append(todoItem);
  });
};

export default fetchTodos;