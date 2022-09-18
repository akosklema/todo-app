import updateTodoStatus from '../services/store/updateTodoStatus';
import updateItemsLeftCounter from '../utils/updateItemsLeftCounter';
import getQueryFilterParam from '../utils/getQueryFilterParam';
import { theme } from './switchTheme';

import checkSVG from '../assets/icon-check.svg'

import todoItemClasses from '../components/TodoItem/TodoItem.module.css';

function handleCompleteTodo(todoListItem) {
  const filterParam = getQueryFilterParam(window.location.href);

  const completeButton = todoListItem.querySelector(`.${todoItemClasses['complete-todo-button']}`);
  const todoText = todoListItem.querySelector(`.${todoItemClasses['todo-item-content']}`);

  completeButton.classList.toggle(todoItemClasses['complete-todo-button--checked']);
  todoText.classList.toggle(todoItemClasses['todo-item-content--completed']);

  if (todoListItem.dataset.status === 'active') {
    const checkImg = document.createElement('img');
    checkImg.src = checkSVG;
    checkImg.alt = 'Complete check icon'
    completeButton.append(checkImg)

    todoListItem.setAttribute('data-status', 'completed');
    updateItemsLeftCounter(-1);

    if (filterParam === 'active') {
      todoListItem.remove();
    }

  } else {
    const img = completeButton.querySelector('img');
    completeButton.removeChild(img);

    todoListItem.setAttribute('data-status', 'active');
    updateItemsLeftCounter(1);

    if (filterParam === 'completed') {
      todoListItem.remove();
    }
  }

  if (theme === 'dark') {
    todoListItem.classList.add(todoItemClasses['dark-mode']);
    todoListItem.querySelector(`.${todoItemClasses['complete-todo-button']}`)
      .classList.add(todoItemClasses['dark-mode']);
    todoListItem.querySelector(`.${todoItemClasses['todo-item-content']}`)
      .classList.add(todoItemClasses['dark-mode']);
  }

  updateTodoStatus(parseInt(todoListItem.dataset.id, 10));
};

export default handleCompleteTodo;