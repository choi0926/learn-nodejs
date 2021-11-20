function func1(a: number, b: number) {
  return a + b;
}

console.log(func1(1, 2)); // 3

const func2 = (a: number, b: number) => {
  return a + b;
};

console.log(func2(1, 2)); //3

const func3 = (a: number, b: number) => a + b;

console.log(func3(1, 2)); //3

const func4 = (a: number = 2) => a * a;
console.log(func4(2)); // 4
console.log(func4()); // 4

const func5 = (...numbers: number[]) => {
  return numbers;
};
console.log(func5(1, 2, 3, 4)); // [ 1, 2, 3, 4 ]
