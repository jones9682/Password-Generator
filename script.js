// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSpecialChar;
var choices;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Function to generate password
function generatePassword() {
  enter = parseInt(
    prompt(
      "Choose how many characters long you'd like your password to be (between 8-128 characters): "
    )
  );
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    //Continues once user input is validated
    confirmLowercase = confirm("Will this contain Lowercase letters");
    confirmUppercase = confirm("Will this contain Uppercase letters");
    confirmNumbers = confirm("Will this contain Numbers");
    confirmSpecialChar = confirm("Will this contain Special characters");
  }
  // if for 4 negative options
  if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmNumbers &&
    !confirmSpecialChar
  ) {
    choices = alert("You must choose a criteria!");
    //  Else if 4 positive options
  } else if (
    confirmLowercase &&
    confirmUppercase &&
    confirmNumbers &&
    confirmSpecialChar
  ) {
    choices = lowercase.concat(uppercase, numbers, specialChar);
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
