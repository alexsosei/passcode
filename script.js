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
  '.'
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
  'z'
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
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length
  let lowercase
  let uppercase
  let numeric
  let specialChar


  length = prompt('What is the length of your password')
  while(length < 10 || length > 64){
    length = prompt("The length should be within the ranges of 10 and 64")  
  }

  do{
  lowercase =  confirm("Should password include lowercase")
  uppercase =  confirm("Should password include uppercase")
  numeric =  confirm("Should password include numeric")
  specialChar =  confirm("Should password include special characters")
  }while (!lowercase && !uppercase && !numeric  && !specialChar)
  
  return {
    length,
    lowercase,
    uppercase,
    numeric,
    specialChar
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randonNumber = Math.floor(Math.random() * arr.length)
  return arr[randonNumber]
}

// Function to generate password with user input
function generatePassword() {
  let password = ""
  let chars = []

  const options =  getPasswordOptions()

  if(options.lowercase){
    chars = chars.concat(lowerCasedCharacters)
  }

  if(options.numeric){
    chars= chars.concat(numericCharacters)
  }

  if(options.specialChar){
    chars = chars.concat(specialCharacters)
  }

  if(options.uppercase){
    chars = chars.concat(upperCasedCharacters)
  }

  for (let i = 0; i < parseInt(options.length); i++) {
    password += getRandom(chars) 
  }
  
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);