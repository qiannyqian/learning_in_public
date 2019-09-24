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





