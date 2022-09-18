import Header from './components/Header/Header';
import CreateTodoForm from './components/CreateTodoForm/CreateTodoForm';
import TodosLayoutContainer from './components/TodosLayoutContainer/TodosLayoutContainer';

import fetchTodos from './eventListeners/fetchTodos';

import classes from './App.module.css';
import switchTheme from './eventListeners/switchTheme';

function App() {
  const fragment = document.createDocumentFragment();

  const mainElement = document.createElement('main');
  const pageContentContainer = document.createElement('div');
  pageContentContainer.classList.add(classes['page-content-container']);

  mainElement.append(pageContentContainer);
  pageContentContainer.append(CreateTodoForm());
  pageContentContainer.append(TodosLayoutContainer());

  fragment.append(Header());
  fragment.append(mainElement);

  window.addEventListener('load', () => {
    fetchTodos();

    const theme = JSON.parse(localStorage.getItem('theme'));
    if (theme === 'dark') {
      switchTheme();
    }
  });

  return fragment;
};

export default App;