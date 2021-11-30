//구조분해 할당
const array = [1, 2, 5];
const [a, b, c = 3] = array;

console.log(array);
console.log(a);
console.log(b);
console.log(c);
console.log({ a, b, c });

let [d, e] = array;
console.log({ d, e });

[e, d] = [d, e];
console.log({ d, e });

// 객체는 key값을 같게해야한다.
const object = { f: 1, g: 2, h: 3 };
const { f, g, h } = object;
console.log({ f, g, h });
console.log(f, g, h);
