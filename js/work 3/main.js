// 1. Check if age is greater than 18
let age = 27; // Example input

if (age > 18) {
  console.log("You are an adult");
}


// 2. Check if score is less than or equal to 50
let score = 45; // Example input

if (score <= 50) {
  console.log("You failed the test");
}


// 3. Check if name is equal to "John"
let name = "John"; // Example input

if (name === "John") {
  console.log("Hello, John");
}


// 4. Check if day is not Saturday or Sunday
let day = "Monday"; // Example input

if (day !== "Saturday" && day !== "Sunday") {
  console.log("It's a weekday");
}


// 5. Check if num is divisible by 2
let num = 4; // Example input

if (num % 2 === 0) {
  console.log("The number is even");
}


// 11. Check GPA
let gpa = 3.5; // Example input

if (typeof gpa === 'number' && gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
}


// 12. Check password length
let password = "mypassword123"; // Example input

if (typeof password === 'string' && password.length >= 8) {
  console.log("Your password is strong");
}


// 13. Check working age
let age = 30; // Example input

if (typeof age === 'number' && age >= 18 && age <= 65) {
  console.log("You are of working age");
}


// 14. Check primary color
let color = "red"; // Example input

if (typeof color === 'string' && (color === "red" || color === "green" || color === "blue")) {
  console.log("color is a primary color");
}


// 15. Check if input is a number using isNaN()
function isValidNumber(input) {
  if (isNaN(input)) {
    return input + " is not a number";
  } else {
    return input + " is a valid number";
  }
}

console.log(isValidNumber(11));     // Output: 11 is a valid number
console.log(isValidNumber("19"));   // Output: 19 is a valid number
console.log(isValidNumber("xyz"));   // Output: xyz is not a number
console.log(isValidNumber("17.5")); // Output: 17.5 is a valid number
console.log(isValidNumber("21F"));   // Output: 21F is not a number
console.log(isValidNumber(null));   // Output: null is a valid number (null is coerced to 0 in comparisons)
console.log(isValidNumber(undefined)); // Output: undefined is not a number
console.log(isValidNumber("")); // Output:  is a valid number (empty string is coerced to 0)


// More robust examples with prompts (commented out):

/*
// 11. GPA check with prompt
const gpaPrompt = prompt("Enter your GPA:");
const gpa = parseFloat(gpaPrompt);

if (!isNaN(gpa) && gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
} else {
    console.log("Invalid GPA input or GPA is less than 3")
}

// 12. Password check with prompt
const passwordPrompt = prompt("Enter your password:");
const password = passwordPrompt;

if (typeof password === 'string' && password.length >= 8) {
  console.log("Your password is strong");
} else {
    console.log("Password must be at least 8 characters")
}

// 13. Working age check with prompt
const agePrompt = prompt("Enter your age:");
const age = parseInt(agePrompt);

if (!isNaN(age) && age >= 18 && age <= 65) {
  console.log("You are of working age");
} else {
    console.log("Invalid age input or not in working age range")
}

// 14. Primary color check with prompt
const colorPrompt = prompt("Enter a color:");
const color = colorPrompt.toLowerCase(); // Convert to lowercase for case-insensitivity

if (typeof color === 'string' && (color === "red" || color === "green" || color === "blue")) {
  console.log("color is a primary color");
} else {
    console.log("Not a primary color")
}
*/

