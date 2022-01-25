/* eslint-disable no-undef */

const todos = [];

const form = document.querySelector('form');
const input = form.querySelector('input');
const submitButton = form.querySelector('button');
let target;

const createTodo = (todo) => {
  todos.push(todo);

  const div = document.querySelector('div');
  const deleteAllButton = document.createElement('button');
  const checkedDeleteButton = document.createElement('button');
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');
  const button = document.createElement('button');

  deleteAllButton.className = 'deleteAll';
  deleteAllButton.innerText = 'Delete All';
  checkedDeleteButton.innerText = 'Checked Delete';
  checkbox.type = 'checkbox';
  checkbox.checked = todo.isComplete;
  span.innerText = todo.content;
  button.innerText = 'Delete';

  deleteAllButton.addEventListener('click', async () => {
    try {
      const { data } = await axios.delete('/api/todos');
      if (data.isSuccess) {
        div.innerHTML = '';
        todos.splice(0, todos.length);
        ul.innerHTML = '';
      }
    } catch (err) {
      console.error(err);
    }
  });

  checkedDeleteButton.addEventListener('click', async () => {
    try {
      const ids = todos.reduce((result, todo) => {
        if (todo.isComplete) {
          return [...result, todo.id];
        }

        return result;
      }, []);

      const { data } = await axios.delete(`/api/todos/${ids.join(',')}`);
      if (data.isSuccess) {
        const indexes = todos.reduce((result, todo, index) => {
          if (ids.includes(todo.id)) {
            return [index, ...result];
          }

          return result;
        }, []);

        indexes.forEach((index) => {
          todos.splice(index, 1);
          ul.removeChild(ul.children[index]);
        });
        if (todos.length === 0) {
          div.innerHTML = '';
        }
      }
    } catch (err) {
      console.error(err);
    }
  });

  checkbox.addEventListener('click', async (event) => {
    try {
      const isComplete = event.target.checked;
      const { data } = await axios.put(`/api/todos/${todo.id}`, { isComplete });
      if (data.isSuccess) {
        const index = todos.findIndex(({ id }) => id === todo.id);
        todos[index].isComplete = isComplete;
      }
    } catch (err) {
      console.error(err);
    }
  });

  span.addEventListener('click', async (event) => {
    try {
      const content = event.target.innerText;
      input.value = content;
      submitButton.innerText = 'update';
      submitButton.value = todo.id;
      target = span;
    } catch (err) {
      console.error(err);
    }
  });

  button.addEventListener('click', async () => {
    try {
      const { data } = await axios.delete(`/api/todos/${todo.id}`);
      if (data.isSuccess) {
        const index = todos.findIndex(({ id }) => id === todo.id);
        todos.splice(index, 1);
        ul.removeChild(li);
        if (todos.length === 0) {
          div.innerHTML = '';
        }
      }
    } catch (err) {
      console.error(err);
    }
  });

  if (todos.length > 0 && todos.length < 2) {
    div.appendChild(deleteAllButton);
    div.appendChild(checkedDeleteButton);
  }

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
};

// form 태그 사용시 preventDefault 추가
form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    if (submitButton.innerText === 'create') {
      const { data } = await axios.post('/api/todos', { content: input.value });
      if (data.isSuccess) {
        createTodo(data.todo);
      }
    }

    if (submitButton.innerText === 'update') {
      const { data } = await axios.put(`/api/todos/${submitButton.value}`, {
        content: input.value,
      });
      if (data.isSuccess) {
        const index = todos.findIndex(({ id }) => id === submitButton.value);
        todos[index].content = input.value;
        target.innerText = input.value;
        submitButton.innerText = 'create';
      }
    }
    input.value = '';
  } catch (err) {
    console.error(err);
  }
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
