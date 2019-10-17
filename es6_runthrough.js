// ES6 tings from @jellythewobbly

// ES6

// let & const

let a = 10; // ES5

let b = 20;
console.log(b);
b = 25;
console.log(b);

const c = 30;
// ERROR ON NEXT LINE
// c = 45;

// template literals

const sayHello = name => `Hello ${name}`;

console.log(sayHello('friends'));

const saySum = (num1, num2) => `The sum is ${num1 + num2}`;

console.log(saySum(2, 5));

// Fat arrow

// ES5
function someFunc() {
  console.log('hello function');
}

// ES6
const otherFunc = () => console.log('hello ES6');

// use () for no args

otherFunc();

const sayHi = name => `Hi ${name}`;

// no need for () for single param
// implicit return for single line

console.log(sayHi('Qian'));

const add2Nums = (num1, num2) => num1 + num2;
// implicit return for single line

const sum = add2Nums(1, 2);
console.log(sum);

// Default param, rest, spread

const eatingHabits = (isHungry = false, numberOfMeals = 3) => {
  const hungerState = isHungry ? 'REALLY HUNGRY' : 'not hungry';
  console.log(`I am ${hungerState} and I eat ${numberOfMeals} meals a day`);
};

eatingHabits();
eatingHabits(true, 10);

// rest

const addNums = (num1, num2, ...rest) => 
  // rest is an array 
   rest.reduce((acc, cur) => acc + cur, num1 + num2)
;

console.log(addNums(1, 4));
console.log(addNums(1, 4, 3));
console.log(addNums(1, 4, 3, 5, 3, 2));

// spread
// Get the max number;

const numbers = [1, 2, 3, 5, 6, 8, 25];

console.log(`The max is ${Math.max(1, 2, 3, 4, 5)}`);

console.log(`The other max is ${Math.max(...numbers)}`);

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = arr1;
const arr3 = ['a', 'b', 'c', 'd', 'e'];

console.log(arr1 === arr2); // true
console.log(arr1 === arr3); // false

console.log(arr1 == arr2); // true
console.log(arr1 == arr3); // false

arr1[0] = 'hello world';
arr2[1] = 'whoa is this happening';
arr3[2] = arr1[2];

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(arr1[2] === arr3[2]);

// clone using spread

const arrA = [1, 2, 3, 4, 5];
const arrB = arrA;
const arrC = [...arrA]; // cloning the elements of the array (NOT THE SAME ARRAY)

console.log(arrA);
console.log(arrB);
console.log(arrC);

console.log(arrA === arrC);

const complexA = [1, 2, 3, ['a', 'b', 'c']];
const complexB = [...complexA];

complexB[3] = [...complexA[3]]; // MAGIC

console.log(complexA[3] === complexB[3]);

console.log(complexA === complexB);
complexA[3][0] = 'HELLO WORLD';

console.log(complexA);
console.log(complexB);

// Objects

const person = { name: 'some name', age: 21 };
const samePerson = person;

person.name = 'new name';

console.log(samePerson);

const qian = { address: 'Bukit Batok', age: 21 };
const shu = qian;
const jon = { ...qian, age: 72 };
const youngJon = { age: 72, ...qian };

qian.address = 'One North';
console.log(shu);
console.log(jon);
console.log(youngJon);
