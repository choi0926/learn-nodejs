const numbers = [1, 2, 3, 4, 5];
const [one, ...rest] = numbers;

console.log(numbers); // [1,2,3,4,5]
console.log(one); // 1
console.log(rest); //[2,3,4,5]

const greenCuteSlime = {
  name: '슬라임',
  attributes: '귀여움',
  color: '초록색',
};

console.log(greenCuteSlime); // { name: '슬라임', attributes: '귀여움', color: '초록색' }

//key값이 같아야한다.
const { color: 색깔, ...cuteslime } = greenCuteSlime;
console.log({ 색깔, cuteslime }); // { color: '초록색', cuteslime: { name: '슬라임', attributes: '귀여움' } }
// key값 변경시
// const { color: 색상, ...cuteslime } = greenCuteSlime;
// console.log({ 색상, cuteslime });

const { attributes, ...slime } = cuteslime;
console.log({ attributes, slime }); // { attributes: '귀여움', slime: { name: '슬라임' } }
