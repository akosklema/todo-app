import changeTodoOrder from '../services/store/changeTodoOrder';
import setClickEvents from './setClickEvents';

let srcElement;

function setDragAndDropHandlers(todoItem) {
  todoItem.addEventListener('dragstart', function(event) {
    this.style.opacity = '0.2';
    srcElement = this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);
    event.dataTransfer.setData('text/plain', JSON.stringify({
      id: this.dataset.id,
      status: this.dataset.status
    }));
  });

  todoItem.addEventListener('dragover', function(event) {
    event.preventDefault();
    return false;
  });

  todoItem.addEventListener('dragend', function() {
    this.style.opacity = '1';
  });

  todoItem.addEventListener('drop', function(event) {
    const { id: srcElementId, status: srcElementStatus } = JSON.parse(event.dataTransfer.getData('text/plain'));
    const thisElementId = parseInt(this.dataset.id);

    srcElement.setAttribute('data-id', this.dataset.id);
    srcElement.setAttribute('data-status', this.dataset.status);
    srcElement.innerHTML = this.innerHTML;

    this.setAttribute('data-id', srcElementId);
    this.setAttribute('data-status', srcElementStatus);
    this.innerHTML = event.dataTransfer.getData('text/html');

    changeTodoOrder(parseInt(srcElementId, 10), thisElementId);

    setClickEvents(srcElement);
    setClickEvents(this);
  });
};

export default setDragAndDropHandlers;