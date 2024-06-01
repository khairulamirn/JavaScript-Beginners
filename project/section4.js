//  OBJECT LITERALS (state & behavior) (varaibles and functions)

const dog = {
    // state
    name: 'Max',
    breed: 'Dachshund',
    age: 5,
    weightInPounds: 12,
    // behavior
    // function within an object we call it a method
    eat: function() {
        console.log('Chomp!');
    },
    bark () {
        console.log('Woof!');
    }
}

// QUIZ 

/* 
    1. What is the purpose of JS object?

    ANS: Store key value pairs, their purpose is to store State and Behavior. State is represented by properties and behavior is represented by functions within an object. Thus, we called this a method. 
*/


//  FACTORY FUNCTIONS 

// code duplication (hard to maintain if its begin to grow)
/* const anotherDog = {
     state
     name: 'Marley',
     breed: 'Chocolate Lab',
     age: 3,
     weightInPounds: 60,
     behavior
     function within an object we call it a method
     eat: function() {
         console.log('Chomp!');
    },
    bark() {
        console.log('Woof!');
    }
}
*/ 

// Note: We can also use functions tu return an object

function getDog(name, breed, age, weightInPounds) {
    return {
        // duplication same key and value name 
        name: name,
        // syntatic sugar (when have key and value name the same use this) Only work if the key and parameter is the same 
        breed,
        age,
        weightInPounds,
        eat () {
            console.log(this.name +'Chomp!');
        },
        bark() {
            console.log(this.name + 'Woof!');
        }
    }
}

// const anotherDog = getDog('Marley','Chocolate Lab', 3, 60);
// console.log(anotherDog);

//  QUIZ 

/* 
    1. What are factory functions?

    ANS: Provide an efficient way for us to create a new object. It can accept parameter variables where it can help customize the value of the object when being return. The benefit is that it reduces code duplication and the need o copy and paste.
*/


// CONSTRUCTOR FUNCTIONS (to construct the initial state of an object with an initial state and can be customize to the parameter variables) (PascalNotation) (The 'this' keyword which references the object that's calling this code)

// noun PascalNotation
function Dog (name, breed, age, weightInPounds) {
    // this = {};

    //  Add properties to this
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = function () {
        console.log(this.name + ': Chomp!');
    }

    this.bark = function() {
        console.log(this.name + 'Woof!');
    }

    // return.this;
}

// 'new' keyword is syntatic sugar provides a modern and clean syntax and does three things under the hood. It creates an empty JS object it then sets to 'this' keyword to point to this empty object in memory then it return 'this' keyword and does so implicitly.
const anotherDog = new Dog ('Marley','Chocolate Lab', 3, 60);
console.log(anotherDog);


//  OBJECTS ARE DYNAMIC (we can add or remove properties or methods at any time)
const person = {
    name: 'Steven'
};

// console.log(person);

// ADD PROPERTIES
person.favoriteFood = 'Tacos';
// console.log(person);

person['favoriteIceCream'] = 'Chocolate';
// console.log(person);

//  DELETE PROPERTIES 
delete person.favoriteIceCream;
console.log(person);

person.eat = function () {
    console.log('start eating');
}

person.eat();

// QUIZ

/* 
    1. How are objects dynamic?

    ANS: Because you can change and mutate the properties and method of the object after it has been initialize.
*/


//  THE CONSTRUCTOR PROPERTY (Instantiate)

const person2 = {
    name: 'Khairul'
};

console.log(person2.constructor);

// these 2 means the same thing
// let newObj = {}; syntatic sugar
// let newObj = new Object();

new String(); // 'Khairul'
new Boolean(); // true, false
new Number(); // 1,2,3

// QUIZ

/* 
    1. What is the constructor property?

    ANS: Is a property that exist for all objects in JavaScript. Can access it with either the dot notation bracket notation. To instantiate and create that object.
*/


//  FUNCTIONS ARE OBJECTS 

// have properties and methods
function add(num1, num2) {
    return num1 + num2;
}

const n = add; 

// invoke and paste arguments
console.log(n (2,2) );

console.log(add.length);

// Constructor function (object in memory)
function Programmer(name) {
    this.name = name;
    this.writeCode = function() {
        console.log("Code in JavaScript");
    }
}

console.log(Programmer.length);
console.log(Programmer.constructor);

const Programmer2 = new Function('name', `
    this.name = name;
    this.writeCode = function () {
        console.log("Code in JavaScript");
    }
`);

const newProgrammer = new Programmer2 ('Khairul');
console.log(newProgrammer);
newProgrammer.writeCode();

// QUIZ

/* 
    1. How functions are objects in JavaScript?

    ANS: This is because the have properties and method. What distinguishes them from other objects is that functions can be called.
*/


//  VALUE VS REFERENCE TYPES

// Note: Arrays and functions also fall into the object category

// Primitive values are passed by copy not by reference
let a = 10;
let b = a;

a = 20;

console.log(a, b); // 20 10 (refer to different memory addresses)

// another example
// Objects are copied by reference
let c = { value: 20};
let d = c;

c.value = 100;
console.log(c, d); // { value: 100} { value: 100} (referencing the same object and memory) 

// QUIZ

/* 
    1. What are primitive values and what are they passed by?

    ANS: Primitive values simple values such as number, string, boolean, bigint, null, undefined and they are passed by copy.

    2. What are object values and what are they passed by?

    ANS: Object values refers to key value pairs this also include arrays and they are passed by reference.
*/


// ENUMERATING PROPERTIES OF AN OBJECT 

// example
// array
let num = [1, 2, 3, 4, 5];
// for of loops (array)
for (const elements of num) {
    console.log(elements);
}

// object
const cat = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
} 
// for in loops 
for (const key in cat) {
    console.log(cat[key]);
}

// Object is a build-in class in JavaScript and it has properties and methods (functon defined within an object)

// to get the keys of object 
const keysCat = Object.keys(cat); 
console.log(keysCat); // as an array

// Object.values
const valuesCat = Object.values(cat);
console.log(valuesCat);

// key value pairs in array 
const entriesCat = Object.entries(cat);
console.log(entriesCat); // nested array


// for of loops with Object

// for (const key of Object.keys(cat)) {
//     console.log(key);
// }

// for (const values of Object.values(cat)) {
//     console.log(values);
// }

// for (const entry of Object.entries(cat)) {
//     console.log(entry);
// }

// QUIZ 
/* 
    1. How can you enumerate over the properties of an object?

    ANS: Using for in loop to iterate over the keys of an object. We can also use build-in object class iterating over the keys with Objcet.keys enumerating over the values Object.values and enumerating over the properties with object.entries.
*/


//  CLONING AN OBJECT (to change the value but not change the other) (need to have it to be two independent objects accomplished by creating clone of an object)
let e = { value: 10};
let f = {};

// properties and method of e will be copied to f
Object.assign(f, e)

f.value = 20;
console.log(e, f);

//  Spread operator (...)
let g = { value: 10};
let h = {...g};

h.value = 20;
console.log(g, h);

// QUIZ 
/* 
    1. How would you make a clone of an object?

    ANS: Using Object.assign. For the first argument you would pass the target object then you can pass in one or more Source objects. More modern syntax known as the spread operator by the use of three dots before the variable that references the object.
*/


//  GARBAGE COLLECTION 
// Don't have to explicitly deallocate memory. JS has GC meaning that it will self-manage itself and find the variables and objects that are no longer being used and will intelligently free up that memory.

// The Build in Math Function