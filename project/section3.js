// SECTION 3

// IF-ELSE STATEMENTS 
// note : Programming enable us to execute different code based on condition. Thus providing Dynamic and personalize applications to 'end users'. 
// The concept that enables this is conditional statments or more specifically if - else statements.

let priceOfChocolate = 1.99;
let hasAmountInCash = 5;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

if (canBuyChocolate) {
    console.log('Enjoy your purchase');
} else {
    console.log('Sorry you do not have enough');
}

// example 
let hour = 16;

if (hour >= 6 && hour <= 12) 
    console.log ('Serving breakfast');
 
else if (hour > 12 && hour <= 14)
    console.log('Serving lunch');

else 
    console.log('Serving dinner');


// SWITCH-CASE STATEMENTS (used for equality comparisons)
let job = 'Cloud Engineers';

// if (job === 'Software Developer') {
//     console.log('Writes code');
// }
// else if (job === 'Designer') {
//     console.log('Make user interface documents');
// } 
// else if (job === 'Cloud Engineers') {
//     console.log('Manages and deploys cloud resources');
// }
// else {
//     console.log('Works directly with customers');
// }

switch (job) { // code block
    case 'Software Developer':
        console.log('Writes code');
        break;
    case 'Deigner': 
        console.log('Make user interface documents');
        break;
    case 'Cloud Engineers':
        console.log('Manages and deploys cloud resources');
        break;
    default: // remember
        console.log('Works directly with customers');
}


// FOR LOOPS  
let numbers = [1,2,3,4,5,6,7];

// let idx = 0;
// let lengthOfArray = numbers.length;

// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx]);


//  inilization part, condition part, and then increment or decrement part
for (let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers[idx]);
}


// for (let num = 0; num < 100; num++) {
//     console.log(num);
// }

// WHILE LOOPS 
let numbers2 = [1,2,3,4,5,6,7];

// for (let idx = 0; idx < numbers.length; idx++) {
//     console.log(numbers[idx]);
// }

// let idx = 0;
// while (idx < numbers2.length) {
//     console.log(numbers2[idx]);

//     idx++;
// }

let sum = 0
while (true) {
    console.log('Loop');
    sum++;

    if (sum === 10)
        break;
}

// DO - WHILE LOOPS
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

// INFINITE LOOPS (be carefull with the condition) (bcs it always true it will keep executed) (crashing) 
// while (true) {
//     console.log('Loop');

//     break;
// } 
//   (to prevent you need to make sure the loop condition eventually becomes false. 
//   (If the condition is based on a variable, ensure the variable is modified in such a way that it will meet the exit condition)

// FOR-IN LOOPS (for object)
const course = {
    name: 'JavaScript for Beginners',
    duration: 3,
    sections: 7
};

// console.log(course.name);
// console.log(course['duration']);
// console.log(course.sections);

for (const key in course) {
    console.log(course[key]);
}

// FOR-OF LOOPS (special syntax that allows us to iterate over an array for each iteration we get access to the element) (when not use the index)
let numbers3 = [1,2,3,4,5,6,7];

for (let element of numbers3) {
    console.log(element);
}

// BREAK AND CONTINUE STATEMENTS
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exits the loop when i is 5
    }
    console.log(i);
}

let e = 0;
while (e < 10) {
    if (e === 5) {
        break;
    }
    console.log(e);
    e++;
}