const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.reduce((result, number) => {
  return [...result, number + 1];
}, [] as number[]);

console.log(result);

interface Itodo {
  id: number; // or 1 || 2 || 3 || 4
  text?: String; // ?를 붙이면 값이 없어도된다.
  isDone: boolean;
}

const todos: Itodo[] = [
  { id: 1, text: 'JavaScript', isDone: true },
  { id: 2, text: 'TypeScript', isDone: true },
  { id: 3, text: 'NodeJS', isDone: false },
  { id: 4, text: 'Express', isDone: false },
];

const filteredTodos = todos.reduce((result, todo) => {
  if (!todo.isDone) {
    return result;
  }

  return [...result, todo];
}, [] as Itodo[]);

console.log(filteredTodos);

// const res : (a: number) =>{

//   todos.filter((todo) => {
//     return todo.id !== a;
//   });

// }
const filterResult = (number: number) => {
  return todos.filter((todo) => todo.id !== number);
};

console.log(filterResult(3));

//*이벤트 버블링
// * 16 ~ 22 까지는 중요 **
