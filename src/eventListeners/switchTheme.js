import MoonSVG from '../assets/icon-moon.svg';
import SunSVG from '../assets/icon-sun.svg';

import headerClasses from '../components/Header/Header.module.css';
import formClasses from '../components/CreateTodoForm/CreateTodoForm.module.css';
import todosLayoutClasses from '../components/TodosLayoutContainer/TodosLayoutContainer.module.css';
import todoItemClasses from '../components/TodoItem/TodoItem.module.css';

export let theme = 'light';

function switchTheme() {
  const themeSwitcherLogo =  document.querySelector('#theme-switcher-logo');
  const header =  document.querySelector(`.${headerClasses['header']}`);
  const body =  document.querySelector('body');
  const input =  document.querySelector('#todo-input');
  const createTodoButton =  document.querySelector('#create-todo-button');

  const todoList = document.querySelector(`.${todosLayoutClasses['todo-list']}`);
  const todoMobileFooter = document.querySelector(`.${todosLayoutClasses['footer--mobile']}`);
  const todoDesktopFooter = document.querySelector(`.${todosLayoutClasses['footer--desktop']}`);

  const clearButtonList = document.querySelectorAll(`.${todosLayoutClasses['clear-button']}`);
  const filterButtonList = document.querySelectorAll(`.${todosLayoutClasses['filter-button']}`);
  const todoMobileFilter = document.querySelector(`.${todosLayoutClasses['filter--mobile']}`);

  const todoItemList = document.querySelectorAll(`.${todoItemClasses['todo-item']}`);
  const completeTodoButtonList = document.querySelectorAll(`.${todoItemClasses['complete-todo-button']}`);
  const todoItemContentCompletedList = document.querySelectorAll(`.${todoItemClasses['todo-item-content--completed']}`);

  if (theme === 'light') {
    theme = 'dark';
    themeSwitcherLogo.src = SunSVG;
  } else {
    theme = 'light';
    themeSwitcherLogo.src = MoonSVG;
  }

  localStorage.setItem('theme', JSON.stringify(theme));

  header.classList.toggle(headerClasses['header--dark']);
  input.classList.toggle(formClasses['input--dark']);
  input.parentNode.classList.toggle(formClasses['form-container--dark']);
  createTodoButton.classList.toggle(formClasses['create-button--dark']);

  body.classList.toggle('dark');

  todoList.classList.toggle(todosLayoutClasses['dark-mode']);
  todoMobileFooter.classList.toggle(todosLayoutClasses['dark-mode']);
  todoDesktopFooter.classList.toggle(todosLayoutClasses['dark-mode']);

  clearButtonList.forEach(clearButton => {
    clearButton.classList.toggle(todosLayoutClasses['clear-button--dark'])
  });
  filterButtonList.forEach(filterButton => {
    filterButton.classList.toggle(todosLayoutClasses['filter-button--dark']);
  });
  todoMobileFilter.classList.toggle(todosLayoutClasses['filter--mobile--dark']);

  todoItemList.forEach(todoItem => {
    todoItem.classList.toggle(todoItemClasses['dark-mode']);
  });
  completeTodoButtonList.forEach(todoItem => {
    todoItem.classList.toggle(todoItemClasses['dark-mode']);
  });
  todoItemContentCompletedList.forEach(completedItem => {
    completedItem.classList.toggle(todoItemClasses['dark-mode']);
  });
};

export default switchTheme;