const animals = ['개', '고양이'];
const updateAnimals = [...animals, '거북이', ...animals, 'ㅇㅇ'];

console.log(animals); //개 고양이
console.log(updateAnimals); // 개 고양이 거북이

//기존 데이터를 수정할때 자주사용
const slime = { name: '슬라임' };
const cuteSlime = { ...slime, attributes: '귀여움' };
const greenCuteSlime = { ...cuteSlime, color: '초록색' };

console.log(slime);
console.log(cuteSlime);
console.log(greenCuteSlime);
