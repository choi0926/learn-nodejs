const todos = [
  { id: 1, text: 'JavaScript', isDone: true },
  { id: 2, text: 'TypeScript', isDone: true },
  { id: 3, text: 'NodeJS', isDone: false },
  { id: 4, text: 'Express', isDone: false },
];

//some 하나의 값이라도 조건에 맞는지 return boolean
const isSome = todos.some((todo) => {
  console.log(todo);

  return todo.isDone;
});

console.log(isSome); //true
