// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseSelection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseSelection = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$^&%*()+=-[]{}|:<>?,.'";

var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Start function to generate password
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmCharacters;

function generatePassword() {
  //User input
  enter = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  //First if statement for user validation
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    //Start user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    //Continues once user input is validated
    confirmUppercase = confirm("Will this contain uppercase letters?");
    confirmLowercase = confirm("Will this contain lowercase leters?");
    confirmNumbers = confirm("Will this contain numbers?");
    confirmCharacters = confirm("Will this contain characters?");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn2.addEventListener("click", copyPassword);
