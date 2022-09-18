let todoState = [];

export function getTodoState() {
  return todoState;
};

export function updateTodoState(updatedTodoList) {
  todoState = [...updatedTodoList];
};
