const lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Uppercase letters
const uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Numbers
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special characters
const specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Gather user input
var amount = Number(prompt("Please provide a number"));
var lowercaseInput = confirm("Select OK to choose lowercase values");
var uppercaseInput = confirm("Select OK to choose uppercase values");
var numberInput = confirm("Select OK to choose number values");
var specialCharsInput = confirm("Select OK to choose lowercase values");
// Write a function to get all the inputs into an array
function gatherData() {
  return [
    amount,
    lowercaseInput,
    uppercaseInput,
    numberInput,
    specialCharsInput,
  ];
}
// Store choices in a new array
var choices = gatherData();

// Write a function to based on the inputs above concatentate a string
// of random characters


// Declare variable to hold the resulting password string

// declare variables

//  write conditionals based on true/false values of the choices array

// write a for loop to concatenate

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
