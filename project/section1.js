// freeCodeCamp.org - "JavaScript Course for Beginners 2024" https://www.youtube.com/watch?v=Zi-Q0t4gMC8

// TO RUN THE CODE OPEN TERMINAL ( CTRL + ~ ) AND TYPE (node "your file name")
// TO GET OUT OF NODE IN TERMINAL ( CTRL + C or type .exit)
// ('') ("") can be used 

// SECTION 1

// console (for execute data or print messages or values)
console.log('Hello World');

// VARIABLES (can be changed) storage for data 
// let = modern way var = old way 
let message = 'Hello!';
message = 'World!';
console.log(message);

// CONSTANT (can't be changed)
const christmas_2024 = '12.25.2024';
console.log(christmas_2024);

// snake_case (for constant)
const COLOR_GREEN = 'green';
console.log(COLOR_GREEN);

// PRIMITIVE TYPES (can only contaion single thing example; string, number or Boolean)
// string data type
let favoriteFruit = 'strawberries';
let favoriteIceCream = 'chocolate';
let favoriteProgrammingLanguage = 'JavaScript';

// number data type
let numberOfDonuts = 12;
let pi = 3.14;

// BigInt data type
let veryLargeNumber = 5453545354535n;

// booleen data type
let lovesCoding = true;

// undefined data type 
let favoriteColor;
console.log(favoriteColor);

// null data type
favoriteFruit = null;

// symbol data type
const uniqueKey = Symbol("foo");

//  REFERENCE TYPE
// object data type (more complex structure) (more than one variable all in one)
let course = {
    name:'JavaScript for Beginners',
    hours: 3
};

// DYNAMIC TYPING 
let firstName = 'Khairul';
console.log(typeof firstName);

firstName = 100;
console.log(typeof firstName);

firstName = true;
console.log(typeof firstName);

//  OBJECTS 
let biodata = {
    // keys are represented internally as a string
    name: 'Khairulamirin bin Mohamed Lamin', // property of the object
    age: 21
};
// dot notation 
console.log(biodata.name);

// bracket notation 
console.log(biodata['name']);

// reassign property using bracket notation
biodata['name'] = 'Faris Aiman';
console.log(biodata['name']);

// reassign property
biodata.name = 'Ahmad Faizal bin Mat Nor';
console.log(biodata.name);

// bracket use in the case if we dont know which target property you want to access until runtime 
let property = 'age';
console.log( biodata[property] );

// ARRAYS (build-in-data structure)
let productColors = ['blue', 'green',];
console.log(productColors);

//  to access one element in the list 
console.log(productColors[0]);

// different data types in an array (to show the flexibility of JavaScript)
productColors[1] = 42;
console.log(productColors[1]);

// typeof
console.log(typeof productColors);

// length property (number of element in array)
console.log(productColors.length);

// FUNCTIONS
function sayHi() {
    console.log('Hi');
}
sayHi ();

// parameter variable [specify a parameter list within the parentheses '()']
function sayHello(name) {
    console.log('Hello, ' + name);
}
sayHello ('Khairulamirin');

// TYPES OF FUNCTIONS
// return keyword
function multiply(num1, num2) {
    return num1 * num2;
}

console.log( multiply (2, 2) );

// if no return keyword = undefined
function sum(num3, num4) {
    const product = num3 + num4;
}

console.log( sum (2, 2) );
