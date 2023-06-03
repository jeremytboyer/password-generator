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

// Write a function to based on the inputs above concatentate a string
// of random characters
function generatePassword() {
  // Gather user input
  var amount = Math.floor(Number(prompt("Please provide a number")));
  var lowercaseInput = confirm("Select OK to choose lowercase values");
  var uppercaseInput = confirm("Select OK to choose uppercase values");
  var numberInput = confirm("Select OK to choose number values");
  var specialCharsInput = confirm(
    "Select OK to choose special character values"
  );
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
  // Declare variable to hold the resulting password string
  var pass = "";
  // declare variables
  var amount = choices[0];
  var lowercase = choices[1];
  var uppercase = choices[2];
  var numbers1 = choices[3];
  var specials = choices[4];
  var chosenChars = [];
  //  write conditionals based on true/false values of the choices array
  //  and concat the values on an empty array
  if (lowercase) {
    chosenChars = chosenChars.concat(lowercaseLetters);
  }
  if (uppercase) {
    chosenChars = chosenChars.concat(uppercaseLetters);
  }
  if (numbers1) {
    chosenChars = chosenChars.concat(numbers);
  }
  if (specials) {
    chosenChars = chosenChars.concat(specialCharacters);
  }
  // write a for loop to concatenate
  for (var i = 0; i < amount; i++) {
    var randIndex = Math.floor(Math.random() * chosenChars.length);
    pass += chosenChars[randIndex];
  }
  return pass;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
