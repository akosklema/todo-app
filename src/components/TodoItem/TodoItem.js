import handleCompleteTodo from '../../eventListeners/handleCompleteTodo';
import handleDeleteTodo from '../../eventListeners/handleDeleteTodo';
import setDragAndDropHandlers from '../../utils/setDragAndDropHandlers';

import crossSVG from '../../assets/icon-cross.svg';
import checkSVG from '../../assets/icon-check.svg';

import classes from './TodoItem.module.css';

function TodoItem(todoData) {
  const todoItemMarkup =  `
    <button class=${classes['complete-todo-button']}></button>
    <p class=${classes['todo-item-content']}>${todoData.content}</p>
    <button class=${classes['delete-todo-button']}>
      <img src=${crossSVG} alt="Delete todo cross icon" />
    </button>
  `;

  const todoItem = document.createElement('li');
  todoItem.classList.add(classes['todo-item']);
  todoItem.innerHTML = todoItemMarkup;
  todoItem.setAttribute('draggable', 'true');

  const completeButton = todoItem.querySelector(`.${classes['complete-todo-button']}`);
  const deleteButton = todoItem.querySelector(`.${classes['delete-todo-button']}`);
  const content = todoItem.querySelector(`.${classes['todo-item-content']}`);

  if (todoData.status === 'completed') {
    completeButton.classList.add(classes['complete-todo-button--checked']);
    content.classList.add(classes['todo-item-content--completed']);

    const checkImg = document.createElement('img');
    checkImg.src = checkSVG;
    checkImg.alt = 'Complete check icon'
    completeButton.append(checkImg)

    todoItem.setAttribute('data-status', 'completed');
  }

  if (todoData.status === 'active') {
    todoItem.setAttribute('data-status', 'active');
  }

  completeButton.addEventListener('click', () => {
    handleCompleteTodo(todoItem);
  });

  deleteButton.addEventListener('click', () => {
    handleDeleteTodo(todoItem);
  });

  todoItem.setAttribute('data-id', todoData.id);
  setDragAndDropHandlers(todoItem, todoData)

  return todoItem;
};

export default TodoItem;