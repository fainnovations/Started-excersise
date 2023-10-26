// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings:
var fruit1 = 'apple';
var fruit2 = 'banana';
// Test 1: Is fruit1 equal to 'apple'? I predict True.
console.log("Is fruit1 == 'apple'? I predict True.");
console.log(fruit1 == 'apple'); // True
// Test 2: Is fruit2 not equal to 'cherry'? I predict True.
console.log("Is fruit2 != 'cherry'? I predict True.");
console.log(fruit2 != 'cherry'); // True
// Test 3: Is fruit1 equal to 'orange'? I predict False.
console.log("Is fruit1 == 'orange'? I predict False.");
console.log(fruit1 == 'orange'); // False
// Tests using the toLowerCase function:
var text = 'Hello, World';
// Test 4: Is the lowercase version of 'text' equal to 'hello, world'? I predict True.
console.log("Is text.toLowerCase() == 'hello, world'? I predict True.");
console.log(text.toLowerCase() == 'hello, world'); // True
// Test 5: Is 'text' not equal to 'HELLO, WORLD'? I predict True.
console.log("Is text != 'HELLO, WORLD'? I predict True.");
console.log(text != 'HELLO, WORLD'); // True
// Numerical tests involving equality and inequality:
var number1 = 10;
var number2 = 5;
// Test 6: Is number1 greater than number2? I predict True.
console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2); // True
// Test 7: Is number2 less than or equal to 5? I predict True.
console.log("Is number2 <= 5? I predict True.");
console.log(number2 <= 5); // True
// Test 8: Is the sum of number1 and number2 equal to 15? I predict True.
console.log("Is number1 + number2 == 15? I predict True.");
console.log(number1 + number2 == 15); // True
// Test 9: Is number2 greater than or equal to 10? I predict False.
console.log("Is number2 >= 10? I predict False.");
console.log(number2 >= 10); // False
// Test 10: Is number1 not equal to 5? I predict False.
console.log("Is number1 != 5? I predict False.");
console.log(number1 != 5); // False
// Tests using "and" and "or" operators:
var isSunny = true;
var isWarm = false;
// Test 11: Is it sunny and warm? I predict False.
console.log("Is it sunny && warm? I predict False.");
console.log(isSunny && isWarm); // False
// Test 12: Is it sunny or warm? I predict True.
console.log("Is it sunny || warm? I predict True.");
console.log(isSunny || isWarm); // True
// Test whether an item is in an array:
var fruits = ['apple', 'banana', 'cherry', 'date'];
// Test 13: Is 'cherry' in the 'fruits' array? I predict True.
console.log("Is 'cherry' in the 'fruits' array? I predict True.");
console.log(fruits.includes('cherry')); // True
// Test whether an item is not in an array:
// Test 14: Is 'grape' not in the 'fruits' array? I predict True.
console.log("Is 'grape' not in the 'fruits' array? I predict True.");
console.log(!fruits.includes('grape')); // True
