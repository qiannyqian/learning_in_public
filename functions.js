// Function declaration
function walk() {
  console.log('walk');
}

// Function expression - set a variable to a function
// Remember: in Javascript, functions are objects!
// Anonymous function expression as we didn't declare the function name
const run = function() {
  console.log('run');
};
const move = run;
run();
move();

// Differences between function declaration and function expression

// Function declaration: was can call this before we write the function
walk();

function walk() {
  console.log('walk');
}

//This is due to hoisting: the JS engine will move this to the top of the file before running the whole piece of code

//Function expression: you must define the function before calling it
const run = function() {
  console.log('run');
};

run();

// Argument object

function sum() {
	let total = 0;
	for (let value of arguments)
		total += value;
	return total;
}

console.log(sum(1,2,3,4,5,10));

// The Rest Operator
// takes the varying number or params and puts them into an array
function add(...args) {
	//now you can call any array method, like reduce, on the args
	return args.reduce((a, b) => a + b );
}

console.log(add(1, 2, 3, 4, 5, 10));
//returns 25

//example: we want to add a discount to a shopping cart's total

function cart(discount, ...prices) { //parameter that uses the rest operator must be the last formal parameter - it's multiple parameters, and then the rest, hence the name the rest operator
	const total = prices.reduce((a, b) => a + b);
	return total * (1 - discount);
}

console.log(cart(0.1, 20, 30));

// Default Parameters
function interest (principal, rate = 3.5,  years = 5) { //once you give a parameter a default value, you should also give the other parameters after that default values
	rate = rate || 3.5; //if rate has a value, use that, otherwise use 3.5
	years = years || 5;
	return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000));
//both return the same result of 1750

// Getters and Setters
const person = {
	firstName = 'Ayumi',
	lastName = 'Hamasaki',
	fullName() {
		return `${person.firstName} ${person.lastName}` //read-only method
	}
};

console.log(person.fullName());

//getters => access properties
//setters => change (mutate) them

const person1 = {
	firstName = 'Ayumi',
	lastName = 'Hamasaki',
	get fullName() { //method is now a getter
		return `${person.firstName} ${person.lastName}` //read-only method
	},
	set fullName(value) { //setter method requires a parameter to be passed in
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
};

console.log(person1.fullName); //you can now access the method like a property of the object

person1.fullName = 'John Smith';
console.log(person);
// returns object with firstName 'John and lastName 'Smith'

//Try and catch
const person2 = {
	firstName = 'Ayumi',
	lastName = 'Hamasaki',

	set fullName(value) { //setter method requires a parameter to be passed in
		if (typeof value !== 'string') return; //if the param being passed in is not a string, this function will not run
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
};

const person3 = {
	firstName = 'Ayumi',
	lastName = 'Hamasaki',

	set fullName(value) { //setter method requires a parameter to be passed in
		if (typeof value !== 'string')
			throw new Error('Value is not a string.'); //throwing exceptions
		//once an exception is thrown, the rest of the code block is not run
		const parts = value.split(' ');
		if (parts.length !== 2) //checking if the param string has a first name and last name
			throw new Error('Enter a first and last name');
		
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
};

try {
	person3.fullName = '';
}
catch (e) {
	alert(e);
}

console.log(person3);

// Scope - Local and Global
{
	const message = 'hi';
	//local scope
}

const color = 'red';
//global scope - accessible everywhere
//should avoid defining variables or constants of global scope - considered bad practice

function start() {
	const message = 'hi';
	const color = 'blue';
	console.log(color);
	//returns 'blue' - local scope takes precedence over global scope
}

function stop() {
	const message = 'bye';
}

//you can have variables using the same name when they are in different functions / code blocks

//let vs var
//the var keyword is not limited to the block of code of which it's scoped in - its limited by the function block of which it's defined in
//var => function-scoped variables / constants
// ES6 (ES2015): let, const => block-scoped variables / constants

//when var is used to create  global variable, this global variable is then attched to the window object of the browser
//should avoid adding stuff to the window Object

//The This keyword in Javascript
// this references the object that is executing the current function
// method -> obj

const video = {
	title: 'a',
	play() {
		console.log(this);
	}
};

video.stop = function() {
	console.log(this);
}

video.stop();

// function -> global (window, global)
function playVideo() {
	console.log(this);
}

playVideo();
//returns global Window object

// const video1 = {
// 	title: 'video',
// 	tags: ['funny', 'haha', 'sad'],
// 	showTags() {
// 		this.tags.forEach(function(tag) {
// 			console.log(tag); //if you use this here, it will return the global obj, because the this here is within a regular function, and not a method (the method would be showTags, but this is a regular callback function inside the forEach)
// 		});
// 	}
// };

const video1 = {
	title: 'video',
	tags: ['funny', 'haha', 'sad'],
	showTags() {
		this.tags.forEach(function(tag) {
			console.log(this.title, tag);  
		}, this); //the this here references the showTag
	}
};

video1.showTags();
//returns video funny video haha video sad

//Changing the value of "this"
function playVideo() {
	console.log(this);
}

playVideo();
//returns global Window object
playVideo.call({ name: 'Hello'}); //you can pass in multiple parameters using call
//returns {name: "Hello"}
playVideo.apply({ name: 'Hello'});//you can also do that with apply but the params have to be in an array
//returns {name: "Hello"}
playVideo.bind({name: 'hello'})(); //call the function right away
//returns {name: "hello"}

//Three ways to change this

const video1 = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags() {
		const self = this
		this.tags.forEach(function(tag) {
			console.log(self.title, tag); //use the self constant to reference the method object
		}); //the this here references the method object
	}
};

video1.showTags();
//returns a a a b a c

const video2 = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags() {
		this.tags.forEach(function(tag) {
			console.log(this.title, tag);
		}.bind(this)); //the this here references the method object
	}
};

video2.showTags();
//returns a a a b a c

//in ES6, can use arrow functions, which inherit from the containing function
const video3 = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags() {
		//this here references the video3 object
		this.tags.forEach(tag => {
			console.log(this.title, tag); //the this here also references the video3 object as usage of the arrow function means that the this is inherited
		});
	}
};

video3.showTags();
//returns a a a b a c

//Exercise - Sum of Arguments
function sum(...nums) {
	if (nums.length === 1 && Array.isArray(items[0])) //if first element of items is an array
		nums = [...nums[0]] //reset the items to a new array
	return nums.reduce((a, b) => a + b );
}

//Exercise - Area of Circle
const circle = {
	radius: 1,
	get area() { //use a getter method to make this read only
		return Math.PI * this.radius * this.radius;
	}
};

//Exercise - Error Handling
try {
	const numbers = [1,2,3,4];
	const count = countOccurences(null,1); //null is not an array here
	console.log(count);
}
catch (e) {
	console.log(e.message)
}

function countOccurences(array, searchElement) {
	if (!Array.isArray(array))
		throw new Error('Invalid array.');
	
	return array.reduceRight((accumulator, current) => {
		const occurence = (current === searchElement) ? 1 : 0;
		return accumulator + occurence;
	}, 0);
}

//returns  'Invalid array.'