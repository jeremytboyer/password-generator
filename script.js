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

var amount = Number(prompt("Please privde a number"));
var includeLowercase = confirm("Click OK to include lowercase letters");
var includeUppercase = confirm("Click OK to include uppercase letters");
var includeNumbers = confirm("Click OK to include nunbers");
var includeSpecialCharacters = confirm(
  "Click OK to include special characters"
);
function gatherData() {
  return [
    amount,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSpecialCharacters,
  ];
}

var choices = gatherData();

function generatePassword() {
 

  // Declare variable to hold the resulting password string
  var pass = ''
   // declare variables 
  var includeLowercase = choices[1]
  var includeUppercase = choices[2];
  var includeNumbers = choices[3];
  var includeSpecialCharacters = choices[4]
  var charAmount = choices[0]
  var chosenChars = []
//  write conditionals based on true/false values of the choices array
  if (includeLowercase) {
    chosenChars = chosenChars.concat(lowercaseLetters)
  }
  if (includeUppercase) {
    chosenChars = chosenChars.concat(uppercaseLetters)
  }
  if (includeNumbers) {
    chosenChars = chosenChars.concat(numbers)
  }
  if (includeSpecialCharacters) {
    chosenChars = chosenChars.concat(specialCharacters)
  }
// write a for loop to concatenate 
for (var i = 0; i < charAmount; i++) {
    var randIndex = Math.floor(Math.random() * chosenChars.length);
    pass += chosenChars[randIndex];
  }
  return pass
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
