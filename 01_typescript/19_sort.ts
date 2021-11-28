const todos = [
  { id: 2, text: 'TypeScript', isDone: true },
  { id: 4, text: 'Express', isDone: false },
  { id: 3, text: 'NodeJS', isDone: false },
  { id: 1, text: 'JavaScript', isDone: true },
];

//sort는 원본 배열을 수정함
todos.sort((a, b) => {
  return a.id - b.id; //오름차순
  //return b.id - a.id; 내림차순
});

console.log(todos);

//날짜를 sort 하려면 날짜를 유닉스타임으로 변환 후 정렬.

//원본 배열을 수정하지않고 sort
const sortedTodos = [...todos].sort((a, b) => b.id - a.id); // 내림차순
console.log(todos);
console.log(sortedTodos);
