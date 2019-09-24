// For loop
for  (let i = 0; i <= 5; i++) {
	if (i % 2 !== 0) console.log(i);
}

// While loop
let i = 0;
while (i <= 5) { // condition evaluated at the start
	if (i % 2 !== 0) console.log(i);
	i++;
}

// Do...while loop
let i = 0 ;
do {
	if (i % 2 !== 0) console.log(i);
	i++;
} while (i <= 5); // condition evaluated at the end

// For...in loop
const person = {
	name: 'Amy',
	age: 20
};

for (let key in person)
	console.log(key, person[key]);
//Output: name Amy age 20

//Dot Notation
//person.name

//Bracket Notification
//person['name']

const colors = ['red', 'green', 'blue'];

for (let index in colors)
	console.log(index, colos[index]);
//Output: 0 red 1 green 2 blue

// For...of loop
for (let color of colors)
	console.log(color);
//Output: red green blue

//Exercises

//Max of two numbers
let number = max (4,3);

function max(a, b) {
	// if (a > b) return a;
	// return b;

	return (a > b) ? a : b;
}

//Landscape or portrait
console.log(isLandscape(800, 600)); 

function isLandscape(width, height) {

	//return (width > height) ? true : false;

	return (width > height);
}

//Fizzbuzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number

//Attempt
// function fizzBuzz(input) {
// 	switch (input) {
// 		case (input % 3 == 0):
// 			return 'Fizz';
// 		case (input % 5 == 0):
// 			return 'Buzz';
// 		case ((input % 3 == 0) && (input % 5 == 0)):
// 			return 'FizzBuzz';
// 		case ((input % 3 !== 0) && (input % 5 !== 0)):
// 			return input;
// 		case( input(isNaN) ):
// 			return 'Not a number';
// 	}
// }

function fizzBuzz(input) {
	if (typeof input !== 'number')
		return 'Not a number';

	if ((input % 3 === 0) && (input % 5 === 0)) // order matters - this would allow '15' input to return FizzBuzz
		return 'FizzBuzz';

	if (input % 3 === 0)
		return 'Fizz';
	
	if (input % 5 === 0) 
		return 'Buzz';
	
	return input;
}

// Demerit points exercise
//Speed Limit = 70
//Every 5 kmh above => 1 point
//Math.floor()
//12 points -> suspended

checkSpeed(50);

function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;

	if (speed <= speedLimit + kmPerPoint) {
		console.log('OK');
		return;
	}

	const points = Math.floor((speed/speedLimit) / kmPerPoint);
	if (points >= 12)
		console.log('License suspended');
	else
		console.log('Points', points);
}

//Even and Odd numbers exercise

showNumbers(10);

function showNumbers(limit) {
	for (let i = 0; i<= limit; i++) {
		const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
		console.log(i, message);
	}
}

//Count truthy exercise

//Falsy values
//undefined
//null
//''
//false
//0
//NaN

const array = [];

function countTruthy(array) {
	let count = 0;
	for (let value of array)
		if (value)
			count++;
	return count;
}

//String properties exercise

const movie ={
	title: 'hello',
	releaseYear: 2018,
	rating: 4.5,
	director: 'tom'
}

showProperties(movie);

function showProperties(obj) {
	//User for...in loop
	for (let key in obj) {
		if (typeof obj[key] === 'string')
			console.log(key, obj[key]);
	}
}

//Sum of multiples of 3 and 5

function sum(limit) {
	let sum = 0;

	for (let i = 0; i <= limit; i++)
		if (i % 3 === 0 || i % 5 === 0)
			sum += i;
	
	return sum;
}

//Calculate grade exercise

const marks = [80, 70, 50];

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
	const average = calculateAverage(marks);
	//Check upper limit of grades
	if (average < 60) return 'F';
	if (average < 70) return 'D';
	if (average < 80) return 'C';
	if (average < 90) return 'B';
	return 'A';
}

function calculateAverage(array) {
		//sum of array elements / array element count
		let sum = 0;
		//for...of loop
		for (let value of array)
			sum += value;
		return sum / array.length;
}

//Stars exercise

showStars(5);

function showStars (rows) {
	for (let row = 1; row <= rows; row++) {
		let pattern = '';
		for (let i = 0; i < row; i++)
			pattern += '*';
		console.log(pattern);
	}
}

//Prime numbers exercise

showPrimes(20);

//Prime number = factors are only 1 and itself
//Composite number

function showPrimes(limit) {
	for (let number = 2; number <= limit; number++) 
		if (isPrime(number)) console.log(number);
}

function isPrime(number) {
	for (let factor = 2; factor < number; factor++) 
		if (number % factor === 0) 
			return false;
		
	return true;
}

