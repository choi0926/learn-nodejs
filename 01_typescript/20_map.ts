const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map은 원본 배열을 수정하지않는다.
const result = numbers.map((number) => {
  return number + 1;
});

console.log(numbers);
console.log(result);
