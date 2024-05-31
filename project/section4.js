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

console.log(person.constructor);