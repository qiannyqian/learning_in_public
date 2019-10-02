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