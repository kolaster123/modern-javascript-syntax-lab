// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
const array2 = nums.map((currentElement) => {
    return currentElement * '2';
})
// Your code here
console.log('exercise 1 results! ' + array2);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstopping , secondtopping] = pizzaToppings
console.log('exercise 2 results! ' + firstopping);
console.log('Exercise 2 results! ' + secondtopping);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
 const {make , model} = car
console.log('exercise 3 results! ' + make);
console.log('exercise 3 results! ' + model);


// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// Your code here
const controversialPizzaToppings = [...pizzaToppings];

console.log('exercise 4 results! ' + controversialPizzaToppings);

  
// Change the `model` property of `myCar` to 'q7'. Log both objects.
const myCar = { ...car };
// Your code here
myCar.model = 'q7';
console.log('exercise 5 results Original! ' , car);
console.log('exercise 5 results myCar! ' , myCar);

// Create an object named userProfile. 
const userProfile = 'propertyName'
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
const propertyName = {
    [userProfile]: 'Johnny',
};
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
console.log('exercise 6 results! ' , propertyName);

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function kitty(noun ='cat', adjective = 'white'){
    console.log(`the ${noun} is ${adjective}`);
} kitty();

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
console.log(pizza);

const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;


console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);


// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."
const localLangConfig = null;  
const localThemeConfig = null; 
// Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
const LANG = localLangConfig || 'en';
const THEME = localThemeConfig || 'light';

// Log the result
console.log('Language setting:', LANG);
console.log('Website theme:', THEME);

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.name // Your code here
  
  console.log(cat);
  

