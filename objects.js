// Basics - defining an object (OOP)
const circle = {
	radius: 1,
	location: {
		x : 1,
		y : 1
	},
	isVisible: true,
	//Adding a function inside an object
	draw: function() {
		console.log('draw');
	}
};

//Access using the dot notation
circle.draw(); //calling the draw method of the circle object

//Factory Function - used to produce objects
//uses camelCase
function createCircle(radius) {
	return {
		radius,
		draw() {
			console.log('draw');
		}
	};
}

//Calling the function to return a new object
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//Constructor Function - construct or create an object
//uses PascalNotation
function Circle(radius) {
	this.radius = radius; // <- references an empty object
	this.draw = function() {
		console.log('draw');
	}
}

//use the `new` operator, and use the `this` keyword
const circle = new Circle(1);

//value and reference types
//Primitives are copied by their value
//Objects are copied by their reference 

const circle = {
	radius: 1, //value of radius is 1
	draw() {
		console.log('draw'); //value of draw is a function
	}
};

//For...In loop
for (let key in circle)
	console.log(key, circle[key]); //using the bracket notation to get the value of this key or this property

//For ...Of loop - only can be used with iterables, arrays and maps
for (let key of circle)
	console.log(key); // an error will be thrown as an object is not iterable

//Using For...Of loop on the keys of the object
for (let key of Object.keys(circle)) // this will return an array
	console.log(key); //now the array can be iterated through

Object.keys() //dot notation

for (let entry of Object.defineProperties(circle))
	console.log(entry);

//In operator - to see if an object has a given property or method
if ('radius' in circle )  console.log('yes');

//Cloning an Object
const another = {};

for (let key in circle)
	another[key] = circle[key];

another['radius'] = circle[key];

//Object.assign method to clone an object
//clones from one or more source objects into another object
//can use to clone an object or clone from multiple objects into one object
const another = Object.assign({
	color: 'yellow'
}, circle);

//Spread operator
//used to get all properties from one object to be put into another object
const another = { ...circle };

//JS has a garbage collector that de-alllocates memory automatically

//built in objects in JS
//Math object
//Has various methods, refer to MDN article

//gets a random number between 0-1
Math.random()

//get random number between 2 specified values
function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

//Round up number
Math.round(1.9)

//Get largest number
Math.max(1, 2, 3, 4, 5)

//Get smallest number
Math.min(1, 2, 3, 4, 5)

//String object
const another = new String('hi')

//String primitive 
const message = 'hi';

//Has many methods
message.length
message[1]
message.includes('hi')
message.split

//Template literals - uses backticks
const name = 'John';
const another = 
`This is my 
first message to ${name}`; // 

//Date Object
const now = new Date();
const date1 = new Date('May 22 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);

//Address object
let address ={
	street: 'a',
	city: 'b',
	zipCode: 'c'
};

//For...In
function showAddress(address) {
	for (let key in address)
		console.log(key, address[key]);
}

showAddress(address);

//Factory function for address object
let address = createAddress('a', 'b', 'c');

function createAddress(street, city, zipCode) {
	return {
		street,
		city,
		zipCode
	};
}

//Constructor function for address object
let address = new Address('a', 'b', 'c');

function Address(address, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

//Object Equality
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

function areEqual(address1, address2) {
	return address1.street === address2.street &&
		address1.city === address2.city &&
		address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
	return address1 === address2;
}

console.log(areEqual(address1, address2));
//returns true as the properties of each object are equal
console.log(areSame(address1, address2));
//returns false as they are two different objects in different parts of the memory
console.log(areSame(address1, address3));
//returns true as both address1 and address3 are pointing to the same place in memory

//Blog post object
let post = {
	title: 'Hi there',
	body: 'Hello World',
	author: 'Tom',
	views: 23,
	comments: [
		{ author: 'Sara', body: 'Nice!'},
		{ author: 'Sam', body: 'Cool!'},
	],
	isLive: true
};

//Constructor function
function Post(title, body, author) {
	this.title = title;
	this.body = body;
	this.author = author;
	this.views = 0;
	this.comments = [];
	this.isLive = false;
}

let post = new Post('Hihi', 'hihihi', 'Dan');
console.log(post);

//Price range object
let priceRanges = [
	{ label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 }
	{ label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 }
	{ label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }

];

let restaurants = [
	{ averagePerPerson: 5 }
]
