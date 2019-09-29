//Arrays in Javascript

//Adding elements in arrays
const numbers = [3, 4];
//we cannot reassign numbers to something else, but we can modify the array

//Add to End of Array
numbers.push(5,6);
console.log(numbers);
//returns [3, 4, 5, 6]

//Add to Beginning of Array
numbers.unshift(1, 2);
console.log(numbers);
//returns [1, 2, 3, 4, 5, 6]

//Add to Middle of Array
numbers.splice(2, 0, 'a', 'b'); 
//first parameter refers to the starting index place of where to insert new elements, 2nd parameter refers to what to delete (in this case not deleting anything so 0), 3rd parameter is the elements to be added in to the array
console.log(numbers);
//returns [1, 2, 'a', 'b', 3, 4, 5, 6]

//Finding Elements (Primitives)
numbers.indexOf('a');
//if value is not in the array, it will return -1
numbers.lastIndexOf(1)

numbers.includes(1);
//returns true if given value exists in the array

//Finding Elements (Reference Types)
const courses = [
	{ id: 1, name: 'hello' },
	{ id: 2, name: 'hi' },
];

const course = courses.find(function(course) {
	return course.name === 'hello';
});

console.log(course);
//returns first course object

//Arrow functions
const course = courses.find(course => course.name === 'hello');

//Removing Elements
const numbers = [1, 2, 3, 4]

//Remove from the end of the array
const last = numbers.pop();
console.log(numbers);
//returns [1, 2, 3]
console.log(last);
//returns 4

//Remove from start of the array
const first = numbers.shift();
console.log(first);
//returns 1
console.log(numbers);
//returns [2, 3]

//Remove from middle of the array
numbers.splice(2, 1);
console.log(numbers);
//returns [1, 2, 4]

//Emptying an array

//1. reassign
numbers = [];
//works if you do not have multiple references to the original array

//2. truncate the array
numbers.length = 0;

//3. Splice method
numbers.splice(0, numbers.length);

//4. Pop method - not recommended for large arrays
while (numbers.length >0)
	numbers.pop()

//Combining and slicing arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const combine = first.concat(second);
console.log(combined);
//returns [1, 2, 3, 4, 5, 6]

const slice = combined.slice(2, 4); //start after index 2, finish after index 4
console.log(slice);
//returns [3, 4]

const slice2 = combined.slice(2); //start after index 2, get all other elements after that
console.log(slice2);
//returns [3, 4, 5, 6]

//Primitives are copied into new array, objects are copied by their reference point

//Spread operator
const combined = [...first, ...second];

//using spread operator to copy into new array
const copy = [...combined];

//Iterating an array
//For...Of loop

const numbers = [1, 2, 3];
for (let number of numbers)
	console.log(number);

//ForEach method
numbers.forEach(function(number) {
	console.log(number);
});

//ForEach using arrow
numbers.forEach(number => console.log(number));

//Display number and index
numbers.forEach((number, index) => console.log(index, number));

//Joining arrays
const numbers = [1,2,3];
numbers.join(',');
//Join method returns a string
//returns 1,2,3

const message = 'This is my first message';
const parts = message.split(' ');
const combined = parts.join('-');
// returns This-is-my-first-message
// Real world use case - convert string of article title into a URL slug

//Sorting Arrays
const numbers = [2,3,1];
numbers.sort();
//returns [1,2,3]

numbers.reverse();
//returns [3,2,1]

const courses = [
	{ id: 1, name : 'Node.js' },
	{ id: 1, name : 'javascript' },
];

courses.sort(function(a,b) {
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();

	if ( nameA < nameB ) return -1;
	if ( nameA > nameB ) return 1;
	return 0;
	//based on ASCII value

})

console.log(courses);
//array of objects is now properly sorted, regardless of letter case in original courses object

//Testing The Elements of an Array
const numbers = [1, -1, 2, 3];

//check if value is a positive number
const atLeastOnePositive = numbers.every(function(value) {
	return value >= 0;
});

//The some method will run the callback function on every element of the array
//once it hits a number that is >= 0, it will then stop

console.log(atLeastOnePositive);
//returns false

//Filtering An Array
const numbers = [1, -1, 2, 3];

 //return positive values; elements will be added to new array;
const filtered = numbers.filter(n => n >= 0);

console.log(filtered);
//returns [1, 2, 3]

//Mapping An Array
//add li tags to each element of array (mapping numbers to strings)
const items = filtered.map(n => '<li>' + n + '</li>');

//use join method to display as string, concatenate string within ul tags
const html = '<ul>' + items.join(''); + '</ul>'

//mapping to an object
const itemss = filtered.map( n => ({ value: n })); //have to put object between parentheses as JS engine might think {} === code block, which in this case is not, we're just trying to return an object

//filter and map methods are chainable, meaning you can call them one after another in a chain
const items = numbers
	.filter(n => n >= 0) // get only positive elements
	.map(n => ({ value: n})) //map each element to an obj
	.filter(obj => obj.value > 1) // get only objs with value > 1
	.map(obj => obj.value); //map the objs values to new array

//returns [2, 3]

//Reducing An Array - reduce all elements of an array into 1 element

const sum = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);
//reduce method has two parameters: a callback function and initial value for accumulator
//how it works:
//First, set accumulator to 0
//then, add currentValue (first element of array) to accumulator
// 0 + 1 = 1
//accumulator is now set to 1
//repeat for all elements of the array -> add currentValue (the next few elements in array) to accumulator (whose value changes everytime a value is added to it)
//1 + -1 = 0
//0 + 2 = 2
//2 + 3 = 5

const sum = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});
//if the accumulator is not initialised, it will take on the value of the first element of the array, and then continue running
//1 + -1 = 0
//0 + 2 = 2
//2 + 3 = 5

//code cleanup
const sum = numbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
//returns 5

//Exercise - Array from Range
//Create a function that when given two parameters, create an array that starts and ends with the elements taken from the parameters
const numbers = arrayFromRange(1, 4);
console.log(numbers);
//should return [1, 2, 3, 4]

function arrayFromRange(min, max) {
	const output = [];
	for (let i = min; i <= max; i++)
			output.push(i);
	return output;
}

//Exercise - Includes
const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
	for (let element of array)
		if (element === searchElement)
			return true;
	return false;
}

//Exercise - Except
const numbers = [1, 2, 3, 4];

const output = except(numbers, [1]);

console.log(output);

function except(array, excluded) {
	const difference = [];
	for (let element of array)
		if (!excluded.includes(element)) 
			difference.push(element);
	return difference;
}

//Exercise - Moving an element
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -2);

console.log(output);

function move(array, index, offset) {
	const position = index  + offset;
	if (position >= array.length || position < 0) {
		console.error('Invalid offset');
		return;
	}

	const result = [...array];
	const element = result.splice(index, 1)[0];
	result.splice(position, 0, element)
	return result;
}

//Exercise - Count Occurences
const numbers = [1, 2, 3, 4, 1];

const count = countOccurences(numbers, 1);

console.log(count);
//should return 2

function countOccurences(array, searchElement) {
	let count = 0;

	for (let element of array)
		if (searchElement === element)
			count += 1;
	
	return count;
}

//Reduce method
function countOccurences(array, searchElement) {
	return array.reduce((accumulator, current) => {
		const occurence = (current === searchElement) ? 1 : 0;
		return accumulator + occurence;
	}, 0);
}

//Exercise - Get Max
const numbers = [1, 2, 3, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
	if (array.length === 0) 
		return undefined;
	
	let max = array[0];

	for (let i = 1; i < array.length; i++)
		if (array[i] > max)
			max = array[i];
	
	return max;
}

//Reduce method
function getMax(array) {
	if (array.length === 0) 
		return undefined;
	
	returnarray.reduce((accumulator, current) => {
		if (current > accumulator) return current;
		return accumulator;
	});

	//can be cleaned up as such:
	//return array.reduct((a, b) => (a > b) ? a : b);
}

//Exercise - Movies
const movies = [
	{ title: 'Happy Feet', year: 2018, rating: 4.5 },
	{ title: 'Happy Feet 2', year: 2018, rating: 4.7 },
	{ title: 'Happy Feet 3', year: 2018, rating: 3 },
	{ title: 'Happy Feet 4', year: 2020, rating: 4.5 },
];

const titles = movies
	.filter(n => n.year === 2018 && n.rating >= 4)
	.sort((a, b) =>  a.rating - b.rating)
	.reverse()
	.map(n => n.title)

console.log(titles);




