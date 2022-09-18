import clearCompletedTodos from '../../eventListeners/clearCompletedTodos';
import handleRouting from '../../eventListeners/handleRouting';

import classes from './TodosLayoutContainer.module.css'

function TodosLayoutContainer() {
  const todosLayoutContainerMarkup = `
    <div class=${classes['todos-layout-container']}>
      <ul id="todo-list" class=${classes['todo-list']}></ul>
      <div class=${classes['footer--desktop']}>
        <p><span class="items-left-counter">0</span> items left</p>
        <div class=${classes['filter--desktop']}>
          <a href="/" data-filter="all" class=${classes['filter-button']}>All</a>
          <a href="/active" data-filter="active" class=${classes['filter-button']}>Active</a>
          <a href="/completed" data-filter="completed" class=${classes['filter-button']}>Completed</a>
        </div>
        <button class=${classes['clear-button']}>Clear Completed</button>
      </div>
      <div class=${classes['footer--mobile']}>
        <p><span class="items-left-counter">0</span>  items left</p>
        <button class=${classes['clear-button']}>Clear Completed</button>
      </div>
    </div>
    <div class=${classes['filter--mobile']}>
      <a href="/" data-filter="all" class=${classes['filter-button']}>All</a>
      <a href="/active" data-filter="active" class=${classes['filter-button']}>Active</a>
      <a href="/completed" data-filter="completed" class=${classes['filter-button']}>Completed</a>
    </div>
  `;

  const todosLayoutContainer = document.createElement('div');
  todosLayoutContainer.innerHTML = todosLayoutContainerMarkup;

  const clearButtonList = todosLayoutContainer.querySelectorAll(`.${classes['clear-button']}`);
  
  clearButtonList.forEach(clearButton => clearButton.addEventListener('click', clearCompletedTodos));

  const filterButtonList = todosLayoutContainer.querySelectorAll(`.${classes['filter-button']}`);
  filterButtonList.forEach(filterButton => filterButton.addEventListener('click', (event) => {
    handleRouting(event);

    filterButtonList.forEach(filterButton => filterButton.classList.remove(classes['filter-button--active']));

    if (event.target === filterButton) {
      event.target.classList.add(classes['filter-button--active']);
    } else {
      event.target.classList.remove(classes['filter-button--active']);
    }
  }));

  return todosLayoutContainer;
};

export default TodosLayoutContainer;