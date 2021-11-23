const todos = [
  { id: 1, text: 'JavaScript', isDone: true },
  { id: 2, text: 'TypeScript', isDone: true },
  { id: 3, text: 'NodeJS', isDone: false },
  { id: 4, text: 'Express', isDone: false },
];

// filter 원본 배열을 수정하지않는다.
const filterTodos = todos.filter((todo) => {
  return !todo.isDone;
});

console.log(todos);
console.log(filterTodos);
