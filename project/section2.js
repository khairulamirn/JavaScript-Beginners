// SECTION 2

// Intro to Operators 
// ARITHMETIC OPERATORS (symbol used in programming languages to perform common mathematical operations on number )
/* -, +, *, /, % */
// INCREMENT and DECREMENT 
// Four ways example INCREMENT 
// let num = 1 (current)
// num = num + 1; num +=1; num++ (current get updated value); ++num (using updated value then increment);

// ASSIGNMENT OPERATOR (single equal = sign)
let programmingLanguage = 'JavaScript';

// COMPARISON OPERATORS (deal with number) 
//  > greater than, >= greater than or equal to, < less than, <= less than or equal to 
let num1 = 14;
let num2 = 10;

const isNum1Greater = num1 > num2;
console.log( isNum1Greater );

// EQUALITY OPERATORS 
let a = 2; // number data type
let b = '2'; // string data type

// loose equality (doesn't check if the data types are the same) (2 values)
console.log(a == b); // convert into string (true, because '2' is converted to 2) 

// strict equality (use this instead)
console.log(a === b); // without any convertion (false, because '2' is not converted to 2)

// loose equality other example 
console.log(1 == '1');
console.log(true == '1');

// THE TERNARY OPERATOR (variable = condition ? expressionIfTrue : expressionIfFalse;) (conditional operator)
let age = 16;
const canDrive = age >=16 ? true : false;
console.log(canDrive);

let points = 110;
const customerType = points > 100 ? 'gold' : 'silver';
console.log(customerType);

// LOGICAL OPERATORS (decisions based on multiple conditions), (used to perform boolean operations),(can be applied to any type), (to determine logical relationship between the operant), 
// (truthy or falsy of the combine expression)

//  || (or operator), && (and operator), ! (not operator), ?? (null coalescing)
// 4 possible combinations with two operands

// || or operator (as long the one of them true the expression will return true)
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

let hasReservation = true;
let acceptingWalkIns = false;

const hasAccessToTable = hasReservation || acceptingWalkIns; 

console.log(hasAccessToTable);

// && and operator (short circuit evaluation) (returns the first falsy value if there is one, otherwise, it returns the last value if all are truthy.)
console.log(true && true) // true
console.log(false && true) // false
console.log(true && false) // false
console.log(false && false) // false

let height = 160;
let rideRollerCoaster = true;

const themePark = age >= 16 && rideRollerCoaster;
console.log(themePark);

let c = true, d = true, e = false, f = false;

// demonstartion of ampersand hold higher precedence than or operator (&& evaluated first, then || or operator)
console.log(c && d || e && f); // Output: true, because or operator rules
console.log( (c && d) || (e && f)) // Output: true, because or operator rules

// ! not operator / bang operator (exclamation point) (return inverse)
console.log(!true); // Output: false

let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;

console.log(isRestaurantOpen);

// ?? null coalescing (to provide a default value when dealing with null or undefined values)
let x = null;
const result = x ?? false;

console.log(result);

// example 
let id = null;
let defaultName = "Guest";

let displayName = id ?? defaultName;
console.log(displayName); // Output: "Guest"
