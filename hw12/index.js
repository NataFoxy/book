const formElement = document.getElementById('form');
const addBtnElement = document.getElementsByClassName('btn');
const listElement = document.getElementById('todo_list');

const todos = [];

function changeStatus(e) {
  if (e.target.style.textDecoration === 'line-through') {
    e.target.style.textDecoration = 'none';
  } else {
    e.target.style.textDecoration = 'line-through';
  }
}

function clearInput(e) {
  e.target.todo.value = '';
}

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = {
    needtodo: e.target.todo.value,
  };
  todos.push(todo);

  const liElement = document.createElement('li');
  liElement.textContent = `${todo.needtodo}`;
  liElement.onclick = changeStatus;
  listElement.append(liElement);

  clearInput(e);
});
