//구조분해 할당
const array = [1, 2, 5];
const [a, b, c = 3] = array;

console.log(array); // [ 1, 2, 5 ]
console.log(a); // 1
console.log(b); // 2
console.log(c); // 5
console.log({ a, b, c }); // { a: 1, b: 2, c: 5}

let [d, e] = array;
console.log({ d, e }); // { d : 1, e: 2}

[e, d] = [d, e];
console.log({ d, e }); // { d : 2, e: 1}

// 객체는 key값을 같게해야한다.
const object = { f: 1, g: 2, h: 3 };
const { f, g, h } = object;
console.log({ f, g, h }); // { f: 1, g: 2, h: 3 }
console.log(f, g, h); // 1 2 3
