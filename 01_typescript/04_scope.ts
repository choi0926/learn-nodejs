// var 함수 스코프
// let, const 블록 스코프
var a = 10;

console.log(a); // 10

{
  var a = 20;
}

console.log(a); // 20

let b = 20;

console.log(b); // 20

{
  let b = 30;
}

console.log(b); // 20
