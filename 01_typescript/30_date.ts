const date1 = new Date();

console.log(date1);
console.log(date1.toString());
console.log();

const date2 = new Date().toISOString();

console.log(date2);
console.log(new Date(date2).getFullYear());
console.log(new Date(date2).getMonth() + 1); // 0 부터
console.log(new Date(date2).getDate());
console.log(new Date(date2).getDay()); // 0 일요일, 1 월
console.log(new Date(date2).getHours());
console.log(new Date(date2).getMinutes());
console.log(new Date(date2).getSeconds());

console.log();

const date3 = new Date();
const date4 = new Date('2021-12-07T10:37:48.004Z');

console.log(date3);
console.log(date4);
console.log((date3.getTime() - date4.getTime()) / 1000 / 60); // 분으로 계산
