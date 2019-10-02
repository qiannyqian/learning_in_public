// write a function that takes in (array, searchElement), return the number of occurences of the searchElement
// + BONUS: Use reduce

const arr = [1, 2, 3, 4, 5, 6, 6, 7];

const countOccurences = (array, searchElement) =>
  array.reduce((acc, cur) => (cur === searchElement ? acc + 1 : acc), 0);

const numOf6 = countOccurences(arr, 6);
console.log(numOf6);

// Syntax explainer

function helloWorld() {
  console.log('hello world');
}

helloWorld();

const arrowHelloWorld = () => console.log('hello world');

arrowHelloWorld();

// Task: Write a function that takes in (array, function) and runs the function for each element of the array, returning a new array

const newArray = [1, 2, 3, 4, 5];
const getDouble = i => i * 2;

const newFunc = (array, func) => array.map(func);

console.log(newFunc(newArray, getDouble)); // returns [2, 4, 6, 8, 10]

const testArray = [
  {
    value: 5,
  },
  {
    value: 10,
  },
  {
    value: 3,
  },
  {
    value: 9,
  },
  {
    value: 8,
  },
  {
    value: 1,
  },
  {
    value: 3,
  },
  {
    value: 12,
  },
  {
    value: 15,
  },
];

console.log(testArray);

/* Task: return 
{
	sumOfValues: (number),
	numbersThatAreMultiplesOf3: (array of just numbers),
	final: multiply numbers that are multiples of 3 by 2, sum up the total value of that
}

{
	sumOfValues: 29,
	numbersThatAreMultiplesOf3: [3, 6, 12, 15, 3];
	final: 18
}
*/

const specialFunction = array => {
  // sumofValues
  const sumOfValues = array.reduce((acc, cur) => acc + cur.value, 0);

  // multiplesof3
  const multiplesOf3 = array.filter(i => i.value % 3 === 0).map(i => i.value);

  // final task
  const finalResult = multiplesOf3
    .map(i => i * 2)
    .reduce((acc, cur) => acc + cur);

  return {
    sumOfValues,
    multiplesOf3,
    finalResult,
  };
};

console.log(specialFunction(testArray));
