import deleteTodo from '../services/store/deleteTodo';
import updateItemsLeftCounter from '../utils/updateItemsLeftCounter';

function handleDeleteTodo(todoListItem) {
  if (todoListItem.dataset.status === 'active') {
    updateItemsLeftCounter(-1);
  }
  todoListItem.remove();
  deleteTodo(parseInt(todoListItem.dataset.id, 10));
};

export default handleDeleteTodo;