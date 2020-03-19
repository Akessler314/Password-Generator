// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// // Arrays to hold the lowercase letters, UPPERCASE LETTERS, Numbers and Special Characters. 

// var lowerCaseLetters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCaseLetters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialChar =["!","#","$","%","&","/","*","-","+","(",")","^","@","~","?","<",">","[","]","{","}","_"]

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------






//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//making the range bar and the number input field in sync 
const characterAmountRange = document.getElementById
  ('characterAmountRange')
const characterAmountNumber = document.getElementById
  ('characterAmountNumber')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountNumber.value = value
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 

