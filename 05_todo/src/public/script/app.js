/* eslint-disable no-undef */

const app = async () => {
  const { data } = await axios.get('/api/todos');

  if (data.isSuccess) {
    data.todos.forEach((todo) => {
      console.log(todo);
    });
  }
};

app();
