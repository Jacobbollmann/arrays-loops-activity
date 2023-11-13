/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

const hobbies = ['Travel', 'Flying', 'Eating', 'Cooking', 'Fitness'];
for (let i = 0; i < hobbies.length; i++){
     console.log(hobbies[i]);
}

console.log(hobbies.length);

console.log('');
console.log('');
console.log('');

// Example output
// 1. swimmingßß
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

const colors =['Blue', 'Red', 'Teal', 'Green'];
let tealCount = 0;

for (let i = 0; i < colors.length; i++){
     if (colors[i] === 'Teal'){
          tealCount++;
     }
}

console.log(colors);
console.log(`Teal was found ${tealCount} times `);

console.log('');
console.log('');
console.log('');

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. 
 */

const numbers = [5, 2, 7, 9, 10];
let oddNumbers = [];
let evenNumbers = [];

/*
// For Loop

for (let i = 0; i < numbers.length; i++){
     if (numbers[i] % 2 === 0){
          evenNumbers.push(numbers[i]);
     } else {
          oddNumbers.push(numbers[i]);
     }
}

console.log(`This is the original array: ${numbers}`);
console.log(`This is the odd numbers array: ${oddNumbers}`);
console.log(`This is the even numbers array: ${evenNumbers}`);  

*/

// For of loop
// Just trying to get practice with both versions

for (i of numbers){
     if (i % 2 === 0){
          evenNumbers.push(i);
     } else {
          oddNumbers.push(i);
     }  
}

console.log(`This is the original array: ${numbers}`);
console.log(`This is the odd numbers array: ${oddNumbers}`);
console.log(`This is the even numbers array: ${evenNumbers}`);  


console.log('');
console.log('');
console.log('');

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

const booleanValues = [true, false, true, false, false];
let toggled = [];

// For loop

for (let i = 0; i < booleanValues.length; i++){
          toggled.push(!booleanValues[i]);
}

console.log(`Original values: ${booleanValues}`);
console.log(`Switched values: ${toggled}`)


console.log('');
console.log('');
console.log('');


// For of loop
let toggledII = [];
for (i of booleanValues){
     toggledII.push(!i);
}

console.log(`Original values: ${booleanValues}`);
console.log(`Switched values: ${toggledII}`);


console.log('');
console.log('');
console.log('');


// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

let number = [1, 3, 0, 2, 0, 0, 0];

while (number[number.length - 1] === 0){
     number.pop();
}
console.log(number);


console.log('');
console.log('');
console.log('');

/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */

//Not sure if this is the correct way to do this but it seemed to work.

const numberArray = [2, 5, 7, 13, 9, 21, 30, 18, 11, 45];
let high = Math.max(...numberArray);
let low = Math.min(...numberArray);

console.log(`Highest number = ${high} and the lowest number ${low}`);






// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
