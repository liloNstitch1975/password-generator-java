// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

  const generateBtn = document.getElementById('generate')
  const characterAmount = document.getElementById('characterAmountNumber');
  // console.log(characterAmount)
  const includeUppercase = document.getElementById('includeUppercase');
  const includeSymbol = document.getElementById('specialCharacters');
  const includeNumber = document.getElementById('includeNumber');
  const includeLowerCase = document.getElementById('includeLowerCase')
  // var password = generatePassword();
  
// // 
// // Get references to the #generate element

// function arrayLowToHigh (low, high) {
//   const array = [];
//   //for (let i = low; i <= high; i++)
// } 


// String.fromCharCode(65);  

// var generateBtn = document.querySelector("#generate");
function generatePassword () {
  var possibilities = []
  if (includeUppercase.checked) {
    possibilities = possibilities.concat(upperCasedCharacters)   
  } 
  if (includeNumber.checked) {
    possibilities = possibilities.concat(numericCharacters)
  }
  if (includeSymbol.checked) {
    possibilities = possibilities.concat(specialCharacters)
  }
  if (includeSymbol.checked) {
    possibilities = possibilities.concat(lowerCasedCharacters)
  }
  console.log(possibilities)
  var generatedPassword = ""
  for (var i = 0; i < characterAmount.value; i ++) {
    var randomIndexNumber = Math.floor(Math.random()*possibilities.length) 
    var randomCharacter = possibilities[randomIndexNumber]
    generatedPassword += randomCharacter
  }


  return generatedPassword
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  characterAmount, includeUppercase, includeSymbol, includeNumber
}

generateBtn.addEventListener("click", writePassword) 






































  