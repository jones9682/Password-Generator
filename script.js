// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

//Function used to determine the length of the password
function determineLength() {
  passwordLength = prompt(
    "Choose how many characters long you'd like your password to be (between 8-128 characters): "
  );

  if (passwordLength < 8) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  } else if (passwordLength > 128) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  }
}
function generatePassword() {
  determineLength();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
