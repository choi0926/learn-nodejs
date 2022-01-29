/* eslint-disable no-undef */

const todos = [];

const form = document.querySelector('form');
const input = form.querySelector('input');
const submitButton = form.querySelector('button');
const deleteAllButton = document.querySelector('.deleteAll');
const deleteCheckedButton = document.querySelector('.deleteChecked');
const ul = document.querySelector('ul');

const createTodo = (todo) => {
  todos.push({ ...todo, isUpdate: false });

  deleteAllButton.hidden = false;

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');
  const button = document.createElement('button');

  checkbox.type = 'checkbox';
  checkbox.checked = todo.isComplete;
  span.innerText = todo.content;
  button.innerText = 'Delete';

  checkbox.addEventListener('click', async (event) => {
    try {
      const isComplete = event.target.checked;

      const { data } = await axios.put(`/api/todos/${todo.id}`, { isComplete });

      if (data.isSuccess) {
        const index = todos.findIndex(({ id }) => id === todo.id);

        todos[index].isComplete = isComplete;

        deleteCheckedButton.hidden = !todos.some((todo) => todo.isComplete);
      }
    } catch (err) {
      console.error(err);
    }
  });

  span.addEventListener('click', async (event) => {
    try {
      todos.forEach(({ id }, index) => {
        const isUpdate = id === todo.id;

        todos[index].isUpdate = isUpdate;
      });

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
      const { data } = await axios.delete(`/api/todos?ids=${todo.id}`);

      if (data.isSuccess) {
        const index = todos.findIndex(({ id }) => id === todo.id);

        todos.splice(index, 1);

        ul.removeChild(li);

        deleteAllButton.hidden = todos.length === 0;
        deleteCheckedButton.hidden = !todos.some((todo) => todo.isComplete);
      }
    } catch (err) {
      console.error(err);
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
};

// form 태그 사용시 preventDefault 추가
form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();

    const content = input.value.trim();

    const todo = todos.find((todo) => todo.isUpdate);

    if (content && !todo) {
      const { data } = await axios.post('/api/todos', { content });

      if (data.isSuccess) {
        createTodo(data.todo);
      }
    }

    if (content && todo) {
      const { data } = await axios.put(`/api/todos/${submitButton.value}`, {
        content,
      });

      if (data.isSuccess) {
        const index = todos.findIndex(({ id }) => id === submitButton.value);

        todos[index].content = content;
        todos[index].isUpdate = false;

        const span = ul.childNodes[index].querySelector('span');
        span.innerText = content;

        submitButton.innerText = 'create';
      }
    }
    input.value = '';
  } catch (err) {
    console.error(err);
  }
});

deleteAllButton.addEventListener('click', async () => {
  try {
    const { data } = await axios.delete('/api/todos');

    if (data.isSuccess) {
      todos.length = 0;

      deleteAllButton.hidden = true;
      deleteCheckedButton.hidden = true;

      ul.innerHTML = '';
    }
  } catch (err) {
    console.error(err);
  }
});

deleteCheckedButton.addEventListener('click', async () => {
  try {
    const ids = todos.reduce((result, todo) => {
      if (todo.isComplete) {
        return [...result, todo.id];
      }

      return result;
    }, []);

    const { data } = await axios.delete(`/api/todos?ids=${ids.join(',')}`);

    if (data.isSuccess) {
      const indexes = todos.reduce((result, todo, index) => {
        if (ids.includes(todo.id)) {
          return [index, ...result];
        }

        return result;
      }, []);

      indexes.forEach((index) => {
        todos.splice(index, 1);

        ul.childNodes[index].remove();
      });

      deleteAllButton.hidden = todos.length === 0;
      deleteCheckedButton.hidden = !todos.some((todo) => todo.isComplete);
    }
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
