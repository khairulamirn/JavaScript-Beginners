//  INTRODUCTION TO ARRAYS (a list of data)

// adding elements

// three ways ( end beginning middle)
// end (push)
const numbers = [5, 4, 3, 2, 1];
numbers.push(7, 8, 9);
console.log(numbers); // [5, 4, 3, 2, 1, 7, 8, 9]

// front (unshift)
numbers.unshift(25, 24);
console.log(numbers); // [25, 24, 5, 4, 3, 2, 1]

// middle (splice)
numbers.splice(1, 0, 24, 24); // (index, delete element, add data) argument
console.log(numbers);  // [5, 4, 25, 24, 3, 2, 1]


//  FINDING ELEMENTS (PRIMITIVES)
// indexOf, lastIndexOf, includes

// indexOf method
const numbers1 = [5, 4, 3, 2, 1];
const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree); // can also use numbers[indexOfThree] Output: 2

// lastIndexOf method
const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree);

const indexOfTen = numbers.lastIndexOf(10);
console.log(indexOfTen); // -1
console.log(numbers[indexOfTen]); // undefined

if (indexOfTen === -1) {
    console.log("10 is not found in the array.");
};

// includes method
if (!numbers.includes(10)) {
    console.log('10 is not found in the array');
};


//   FINDING ELEMENTS (REFERENCE TYPES) 
const employees = [
    {
        id: 1,
        name: 'Jim'
    },
    {
        id: 2,
        name: 'Tron'
    },
    {
        id: 3,
        name: 'Albert'
    },
];

// find method (return the first element that mactches) (.findIndex() method return the index where that object is found at) (specify a predicate function to locate an object based on a property) (exist for array class and is used to find an object) (argument specify a function predicate (true or false) or arrow function to implement this)

// const employee = employees.find(function(e) {
//     return e.name === 'Jim'
// });
// console.log(employee);

// arrow functions
const employee = employees.find((e) => e.name === 'Jim');
console.log(employee);


//  ARROW FUNCTIONS (commonly used for callback functions) (alternative syntax) (assign it to variable then define with parantheses and then use equal sign and more than symbol then specify code block) (if only one line can remove the return keyword)

// traditional  function
// function add(num1, num2) {
//     return num1 + num2;
// };

const add = (num1, num2) => num1 + num2;


//  REMOVING ELEMENTS (.pop(), .splice(), .shift())
let numbers2 = [1, 2, 3, 4, 5];

//  .pop method (remove from the end)
const lastElement = numbers2.pop();
console.log(`lastElement: ${lastElement}\n`); // lastElement: 5 \n space between

// remove first element
const firstElement = numbers2.shift();
console.log(`firstElement: ${firstElement}\n`); // firstElement: 1

// remove middle element
const middleElement = numbers2.splice(1, 1); // (index, remove, add)
console.log(`middleElement: ${middleElement}`) // middleElement: 3


//  EMPTYING AN ARRAY 
// while (numbers2.length > 0)
//     numbers.pop();

numbers2.length = 0;
console.log(numbers2);

const deletedNumbers = numbers.splice(0, numbers.length);
console.log(`deletedNumbers: ${deletedNumbers}`);

// if there is one more variable assign to numbers2
let anotherArray = numbers2; // even the numbers2 assign to empty array this variable still using the previous array so its not garbage collected
numbers2 = [];


//  COMBINING AND SLICING ARRAYS
const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

const combinedArray = exampleNumbersA.concat(exampleNumbersB);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

const firstSLice = combinedArray.slice(0, 4); //start index, and end index
console.log(firstSLice); // [1, 2 ,3, 4]


//  THE SPREAD OPERATOR (using three dots ... to copy over an object)
const exampleNumbersC = [1, 2, 3];
const exampleNumbersD = [4, 5, 6];

let combined = [...exampleNumbersC, 9, ...exampleNumbersD, 10];
console.log(combined);

let a = [1, 2];
let b = [...a];


//  ITERATING AN ARRAY (for-of loop) (forEach method)
const numbers3 = [1, 2, 3, 4, 5];

// for (let number of numbers3)
//     console.log(numbers3);

// forEach(element, index)
numbers3.forEach((number, index) => console.log(`At index, ${index}: ${number}`)); // At index, 0: 1 ...


//  JOINING ARRAY 

// array/element to string (accept an argument where can specify what the seperator it will be and will be placed in between the elements of the string that it returns)
const numbers4 = [1, 2, 3, 4, 5];
const joinedNumbers = numbers4.join(', ');
console.log(joinedNumbers); // 1, 2, 3, 4, 5

// string to array 
const courseName = 'JavaScript for beginners';

// const lowercaseCourseName = courseName.toLowerCase();
// const parts = courseName.split(' ');

// method chaining (for same data type)
const parts = courseName
    .toLowerCase()
    .split(' ');

const urlSlug = parts.join('-');
console.log(parts); // ['JavaScript', 'for', 'beginners' ]


//  SORTING ARRAYS .sort() (string, numbers) (object = callback function)
let characters = ['c', 'd', 'b', 'a'];
characters.sort();
console.log(characters);

// .reverse 
characters.reverse();
console.log(characters);

// object
// characters are strings with a single character
let employees1 = [
    {id: 1, name: 'Jen'}, // a
    {id: 2, name: 'Steven'}, // b
    {id: 3, name: 'Andrew'},
    {id: 4, name: 'Terry'},
]; // characters are represented as numbers in computers based on their ask key values CAPITAL letters are considered less than lowercase letters

// if - value = a (first argument comes before the second argument) (0 = equal and in sorted order) (+ value a comes after the argumenet)
employees1.sort((a, b) => { // callback function (2 parameters to compare and compare based on their property)
    const lowercaseA = a.name.toLowerCase(); // 'jen' 'andrew'
    const lowercaseB = b.name.toLowerCase(); // 'steven' 'terry'

    if (lowercaseA < lowercaseB) return -1; // ('jen' < 'steven', returns -1) ('andrew' < 'terry', returns -1)
    if (lowercaseA > lowercaseB) return 1; 
    return 0;
});
console.log(employees1);


//  TESTTING THE ELEMENTS OF AN ARRAY .every() .some()

// .every (All elements pass the test by the provided function it returns true when all the elements is specified with the function and false otherwise)
// is all numbers are even
const numbers5 = [2, 4, 6, 8, 10];
const areAllEven = numbers5.every(numbers5 => numbers5 % 2 === 0);
console.log(`areAllEven: ${areAllEven}`);

// .some (checked if one of the elements in array past the test implemented by the provided function when looking for presence of an element that meets a specific requirements)
const numbers6 = [1, 3, 5, 7, 8, 9];
const hasOneEvenNumber = numbers6.some(numbers6 => numbers6 % 2 === 0);
console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);


//  FILTERING AN ARRAY 
const numbers7 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers7.filter(numbers7 => numbers7 % 2 === 0);
console.log(evenNumbers);

const employees2 = [
    { id: 1, name: 'Alice', role: 'Developer'},
    { id: 2, name: 'Bob', role: 'Designer'},
    { id: 3, name: 'Charlie', role: 'Developer'},
    { id: 4, name: 'Danielle', role: 'Manager'},
];

const developers = employees2.filter(employeee => employeee.role === 'Developer');
console.log(developers);


//  MAPPING AN ARRAY (work with any data type)
// const numbers5 = [2, 4, 6, 8, 10];
const squaredNumbers = numbers5.map(num => num * num);
console.log(squaredNumbers);

const characters1 = ['a', 'b', 'c', 'd'];
const upperCaseCharacters = characters1.map(char => char.toUpperCase());
console.log(upperCaseCharacters);

// object 
const employees3 = [
    { id: 1, name: 'Alice', email: 'Alice@gmail.com'},
    { id: 2, name: 'Steven', email: 'STeVen@gmail.com'},
    { id: 3, name: 'Joe', email: 'Joe@gmail.com'}
];

const updatedEmployees = employees3.map(employee => ({
    ...employee, // copy all properties in employees3
    email: employee.email.toLowerCase()
}));
console.log(updatedEmployees);


//  REDUCING AN ARRAY 
const numbers8 = [1, 10, 5, 14];
// let sum = 0;

// for (const num of numbers8) 
//     sum+=num;

// console.log(`Total sum ${sum}`);

// const sum = numbers8.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0); // initial value
// console.log(`Total sum ${sum}`);

const sum = numbers8.reduce((accumulator, currentValue) => accumulator + currentValue); // first parameters callback function scond parameters is initial value
console.log(`Total sum ${sum}`);


//  FUNCTION DECLARATIONS VS EXPRESSIONS (function is cornerstone=an important quality or feature on which a particular thing depends or is based.)
// 

// function declarations
// function sayHi () {
//     console.log('Hi');
// };
// sayHi();

// function expression 
// let sayHi = function() { //anonymous function 
//     console.log('Hi');
// };
// sayHi();

// flexible
let greeting = function sayHi() { // named function
    console.log('Hi');
};
greeting();


//  HOISTING (process where the js engine automatically moves all functions declarations to the top of their scope before code execution (not working with function expressions)

// Hoisting involves moving variable and function declarations to the top of their containing scope before code execution begins.
// Function expressions are not hoisted in the same way. Only the variable declaration is hoisted, not the assignment. This means the variable is defined at the top of the scope but remains 'undefined' until the assignment is executed.

// function declarations
add1(2,2);

function add1 (num1, num2) {
    console.log(num1 + num2);
};


//  FUNCTION ARGUMENETS (when any parameter doesnt receive an explicit argument its auto assign to undefined by default)
function multiply(num1, num2) {
    // console.log(arguments);
    // return num1 * num2;
    let product = 1;
    for (const num of arguments)
        product *= num // 2,2,4
    return product;
};
console.log(multiply(2,2,4)); // num of arguments


//  THE REST OPERATOR (allows us to gather varying number of arguments into a single array parameter) (function to accept an indefinite number of arguments)
// let course = {
//     name: 'JavaScript',
//     duration: "3 hours"
// };

// let newCourse = {
//     ...course,
//     name: 'JavaScript Pro'
// };

// console.log(newCourse);

function multiply1(...args) {
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}
console.log(multiply1(1, 2, 3, 4));

function multiply2(darab, ...numbers) { // rest parameter can be anything that is make sense
    return numbers.map(number => number * darab);
};

console.log(multiply2(2, 3, 4, 5, 6));


//  DEFAULT PARAMETERS (default value using = sign)
function writeCode(language = "JavaScript") {
    console.log(`Write code in ${language}`);
};

writeCode('JavaScript');
writeCode();


//  GETTERS AND SETTERS (object literals)
const course1 = {
    name : 'JavaScript for beginners',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        let parts = value.split('is');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

course1.details = 'JavaScript Pro is 10 hours';
console.log(course1.details);


//  TRY AND CATCH (if-else throw err) (try {} catch (e) ${e.message})
//  LOCAL VS GLOBAL SCOPE
//  the 'this' keyword (global object in node.js) (window object in browsers)