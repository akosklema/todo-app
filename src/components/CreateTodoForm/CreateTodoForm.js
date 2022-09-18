import handleCreateTodo from '../../eventListeners/handleCreateTodo';

import classes from './CreateTodoForm.module.css';

function CreateTodoForm() {
  const formMarkup =  `
    <input id="todo-input" class=${classes['input']} type="text" placeholder="Create a new todo..." />
    <button id="create-todo-button" type="submit" class=${classes['create-button']} disabled>Create</button>
  `;

  const createTodoForm = document.createElement('form');
  createTodoForm.classList.add(classes['form-container']);

  createTodoForm.innerHTML = formMarkup;

  let inputValue = '';
  const input = createTodoForm.querySelector('#todo-input');
  const createButton = createTodoForm.querySelector('#create-todo-button');
  input.addEventListener('input', (event) => {
    inputValue = event.target.value;
  
    if (inputValue === '') {
      createButton.disabled = true;
    } else {
      createButton.disabled = false;
    }
  });

  createTodoForm.addEventListener('submit', (event) => {
    handleCreateTodo.bind(null, event, inputValue)();
    inputValue = '';
    input.value = '';
    createButton.disabled = true;
  });

  return createTodoForm;
};

export default CreateTodoForm;