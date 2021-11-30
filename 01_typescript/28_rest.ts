const numbers = [1, 2, 3, 4, 5];
const [one, ...rest] = numbers;

console.log(numbers); //1,2,3,4,5
console.log(one); //1
console.log(rest); //2,3,4,5

const greenCuteSlime = {
  name: '슬라임',
  attributes: '귀여움',
  color: '초록색',
};

console.log(greenCuteSlime);

//key값이 같아야한다.
const { color, ...cuteslime } = greenCuteSlime;
console.log({ color, cuteslime });

const { attributes, ...slime } = cuteslime;
console.log({ attributes, slime });
