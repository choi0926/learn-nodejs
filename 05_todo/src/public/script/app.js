/* eslint-disable no-undef */

const todos = [];

const form = document.querySelector('form');
const input = form.querySelector('input');

const createTodo = (todo) => {
  todos.push(todo);

  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');
  const button = document.createElement('button');

  checkbox.type = 'checkbox';
  checkbox.checked = todo.isComplete;
  span.innerText = todo.content;
  button.innerText = 'Delete';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
};

// form 태그 사용시 preventDefault 추가
form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(input.value);
  input.value = '';
});

const app = async () => {
  try {
    const { data } = await axios.get('/api/todos');

    if (data.isSuccess) {
      data.todos.forEach((todo) => {
        createTodo(todo);
      });
    }
  } catch (err) {
    console.error(err);
  }
};

app();
