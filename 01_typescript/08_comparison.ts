// == 는 값이 같을때 ( ** 자동 형변환이 되므로 사용하지않는다.)
// === 는 타입과 값이 같을 경우 (일반적으로 알고있는 ==)
const a = 1;
const b = 1;

console.log(a === b); // true
console.log(a !== b); // false

const c = 10;
const d = 15;
const e = 15;

console.log(c < d); // true
console.log(c > d); // false
console.log(d >= e); // true
console.log(c <= e); // true
