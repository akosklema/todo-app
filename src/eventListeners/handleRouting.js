import fetchTodos from '../eventListeners/fetchTodos';
import redirect from '../utils/redirect';

function handleRouting(event) {
  event.preventDefault();

  const url = new URL(window.location);

  if (event.target.innerText === 'Active') {
    url.searchParams.set('filter', 'active');
  } else if (event.target.innerText === 'Completed') {
    url.searchParams.set('filter', 'completed');
  } else {
    url.searchParams.delete('filter');
  }

  redirect(url);

  fetchTodos();
};

export default handleRouting;