const animals = ['개', '고양이'];
const updateAnimals = [...animals, '거북이'];
console.log(animals); // ['개', '고양이'];
console.log(updateAnimals); //['개', '고양이', '거북이'];

//const updateAnimals = [...animals, '거북이', ...animals, '토끼'];
//console.log(updateAnimals); //  ['개', '고양이', '거북이',  '개', '고양이', '토끼'];

//기존 데이터를 수정할때 자주사용
const slime = { name: '슬라임' };
const cuteSlime = { ...slime, attributes: '귀여움' };
const greenCuteSlime = { ...cuteSlime, color: '초록색' };

console.log(slime); //{ name: '슬라임' };
console.log(cuteSlime); // { name: '슬라임', attributes: '귀여움'  };
console.log(greenCuteSlime); // { name: '슬라임', attributes: '귀여움' , color: '초록색' };
