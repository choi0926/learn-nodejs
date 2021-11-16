const array = [10, 20, 30, 40];
console.log(array);
console.log(array[1]);
console.log(array.length);

console.log();
// slice 함수는 기존 배열을 변경하지않는다.
console.log(array.slice(1, 2));
// indexOf 함수는 포함하는 값의 index를 리턴한다.(없으면 -1을 리턴)
console.log(array.indexOf(20));
// includes 함수는 포함하는 값의 존재여부를 리턴한다.(없으면 false를 리턴)
console.log(array.includes(20));

// unshift, shift 함수는 왼쪽에 추가 / 삭제하는 함수
console.log();
console.log(array.unshift(5)); // 길이
console.log(array);
console.log(array.shift()); // 원소값
console.log(array);

// push, pop 함수는 오른쪽에 추가 / 삭제하는 함수
console.log();
console.log(array.push(50)); // 길이
console.log(array);
console.log(array.pop()); // 원소값
console.log(array);

// splice 함수는 지정한 위치에 추가 / 삭제하는 함수
// splice(시작 인덱스, 변경할 갯수, 바꿀 값 )
console.log();
console.log(array.splice(2, 0, 25)); // 2번 index부터 0개를 삭제하고 25값을 추가한다.
console.log(array);
console.log(array.splice(2, 1)); // 2번 index부터 1개 값을 삭제한다.
console.log(array);

// join 함수는 배열을 문자로 바꿔준다.
console.log();
console.log(array.join());
console.log(array.join(' '));
console.log(array);

// string.padStart(index,'0');
// console.log('9'.padStart(2,'0')) // 09
// console.log('10'.padStart(2,'0')) // 10
