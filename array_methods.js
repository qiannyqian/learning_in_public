//Run through from Jay (@jellythewobbly) sifu

// Map (takes in an array, runs function on each element of the array and returns a new array)

const nums = [1, 2, 3, 4, 5];
const doubleArr = nums.map(element => element * 2);
console.log(doubleArr);

function triple(num) {
	return num * 3;
}

const arrowTriple = num => num * 3;

console.log(triple(5)); // example

const tripleArr = nums.map(triple);
console.log(tripleArr);

const anotherTripleArr = nums.map(arrowTriple);
console.log(anotherTripleArr);


// Filter (takes in an array, returns a new array with the elements that have passed the conditional [returns true] )

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lessThanEquals6 = numbers.filter(i => i <= 6);
console.log(lessThanEquals6);

function isEven(number) {
	return number % 2 === 0;
	// another way
	// return !(number % 2);
}

const arrowIsEven = number => number % 2 === 0;

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

const alsoEvenNumbers = numbers.filter(arrowIsEven);
console.log(alsoEvenNumbers);

// Reduce (takes in an array, runs the function for every element in the array, passing the return value of the function to the next instance of the function. Returns a single value)

const alsoNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfArray = alsoNumbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sumOfArray);

const productOfArray = alsoNumbers.reduce((accumulator, current) => accumulator * current);
console.log(productOfArray);

const someArray = [10, 7, 9, 8, 7, 4, 4, 4, 4, 4];
console.log(someArray);

const numberOf4 = someArray.reduce((acc, cur) => cur === 4 ? acc + 1 : acc, 0);
console.log(numberOf4);

function counter4(counter, num) {
	return num === 4 ? counter + 1 : counter;
}

const num4 = someArray.reduce(counter4, 0);
console.log(num4);

const string = 'HELLO WORLD';

let reversed = '';

for (let i = string.length - 1;  i >= 0; i--) {
	reversed += string[i];
}

console.log(reversed);

const originalString = reversed.split('').reverse().join('');
console.log(originalString);


const newArray = [1, 2, 3, 4, 5, 6, 7, 8];
// TASK: Get all the even numbers and return an array of 3* the value for each number

const resultArray = newArray.filter(i => i % 2 === 0).map(i => i * 3);

console.log(resultArray);

