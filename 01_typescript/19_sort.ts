const todos = [
  { id: 2, text: 'TypeScript', isDone: true },
  { id: 4, text: 'Express', isDone: false },
  { id: 3, text: 'NodeJS', isDone: false },
  { id: 1, text: 'JavaScript', isDone: true },
];

console.log(todos);

//sort는 원본 배열을 수정함
todos.sort((a, b) => {
  return a.id - b.id;
});

console.log(todos);

//날짜를 계산하려면 날짜를 유닉스타임으로 변환하면 된다.
const sortedTodos = [...todos].sort((a, b) => b.id - a.id);

console.log(todos);
console.log(sortedTodos);
