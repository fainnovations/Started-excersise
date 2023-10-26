// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let x = 5;
let y = 10;

// Test 1: Is x equal to 5? I predict True.
console.log("Is x == 5? I predict True.");
console.log(x == 5); // True

// Test 2: Is y not equal to 10? I predict False.
console.log("Is y != 10? I predict False.");
console.log(y != 10); // False

// Test 3: Is x greater than y? I predict False.
console.log("Is x > y? I predict False.");
console.log(x > y); // False

// Test 4: Is x less than or equal to 5? I predict True.
console.log("Is x <= 5? I predict True.");
console.log(x <= 5); // True

// Test 5: Is x + y equal to 15? I predict True.
console.log("Is x + y == 15? I predict True.");
console.log(x + y == 15); // True

// Test 6: Is x not equal to 5 and y equal to 10? I predict True.
console.log("Is x != 5 && y == 10? I predict True.");
console.log(x != 5 && y == 10); // True

// Test 7: Is x equal to 5 or y equal to 15? I predict True.
console.log("Is x == 5 || y == 15? I predict True.");
console.log(x == 5 || y == 15); // True

// Test 8: Is x greater than 5 and y less than 15? I predict False.
console.log("Is x > 5 && y < 15? I predict False.");
console.log(x > 5 && y < 15); // False

// Test 9: Is !(x === 5) I predict False.
console.log("Is !(x === 5)? I predict False.");
console.log(!(x === 5)); // False

// Test 10: Is (x + y) !== (2 * y) I predict True.
console.log("Is (x + y) !== (2 * y)? I predict True.");
console.log((x + y) !== (2 * y)); // True