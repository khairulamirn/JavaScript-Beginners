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