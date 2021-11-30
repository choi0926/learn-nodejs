//&&는 왼쪽이 false면 왼쪽값
//&&는 왼쪽이 true면 오른쪽값
console.log(undefined && 'TypeScript'); //undefined
console.log(null && 'TypeScript'); //null
console.log(1 && 'TypeScript'); // 'TypeScript'
console.log(0 && 'TypeScript'); //0
console.log('TypeScript' && 'JavaScript'); //JavaScript
console.log('' && 'TypeScript'); // ''
console.log(true && 'TypeScript'); // 'TypeScript'
console.log(false && 'TypeScript'); //flase
console.log(NaN && 'TypeScript'); // NaN

//??는 왼쪽값이 undefined, null이면 오른쪽 값, 이외에 값이면 무조건 왼쪽값
console.log('--------------------------');
console.log(undefined ?? 'TypeScript'); //'TypeScript'
console.log(null ?? 'TypeScript'); //'TypeScript'
console.log(1 ?? 'TypeScript'); // 1
console.log(0 ?? 'TypeScript'); //0
console.log('TypeScript' ?? 'JavaScript'); //'TypeScript'
console.log('' ?? 'TypeScript'); // ''
console.log(true ?? 'TypeScript'); // true
console.log(false ?? 'TypeScript'); // false
console.log(NaN ?? 'TypeScript'); // NaN
