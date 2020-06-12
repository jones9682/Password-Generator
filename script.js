// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

var enter;
var choices;
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSpecialChar;

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
  // if 4 negative selections
  if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmNumbers &&
    !confirmSpecialChar
  ) {
    alert("You must choose a criteria!");
    //  Teacher Assistant helped with consolidate
  } else {
    var choices = [];
    if (confirmLowercase) {
      choices = choices.concat(lowercase);
    }
    if (confirmUppercase) {
      choices = choices.concat(uppercase);
    }
    if (confirmNumbers) {
      choices = choices.concat(numbers);
    }
    if (confirmSpecialChar) {
      choices = choices.concat(specialChar);
    }
  }

  /*} else if (
    confirmLowercase &&
    confirmUppercase &&
    confirmNumbers &&
    confirmSpecialChar
  ) {
    choices = lowercase.concat(uppercase, numbers, specialChar);
  }
  // Else if 3 positive selections
  else if (confirmSpecialChar && confirmNumbers && confirmUppercase) {
    choices = specialChar.concat(numbers, uppercase);
  } else if (confirmSpecialChar && confirmNumbers && confirmLowercase) {
    choices = specialChar.concat(numbers, lowercase);
  } else if (confirmSpecialChar && confirmLowercase && confirmUppercase) {
    choices = specialChar.concat(lowercase, uppercase);
  } else if (confirmNumbers && confirmLowercase && confirmUppercase) {
    choices = numbers.concat(lowercase, uppercase);
  }
  // Else if 2 positive selections
  else if (confirmSpecialChar && confirmNumbers) {
    choices = specialChar.concat(numbers);
  } else if (confirmSpecialChar && confirmLowercase) {
    choices = specialChar.concat(lowercase);
  } else if (confirmSpecialChar && confirmUppercase) {
    choices = specialChar.concat(uppercase);
  } else if (confirmLowercase && confirmNumbers) {
    choices = lowercase.concat(numbers);
  } else if (confirmLowercase && confirmUppercase) {
    choices = lowercase.concat(uppercase);
  } else if (confirmNumbers && confirmUppercase) {
    choices = numbers.concat(uppercase);
  }
  // Else if 1 positive selection
  else if (confirmLowercase) {
    choices = lowercase;
  } else if (confirmUppercase) {
    choices = uppercase;
  } else if (confirmNumbers) {
    choices = numbes;
  } else if (confirmSpecialChar) {
    choices = specialChar;
  }*/

  // Password variable is an array placeholder for user generated amount of lenngth
  var password = [];
  choices = choices.join();
  // Random selection for all variables
  for (var i = 0; i < enter; i++) {
    pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  return password.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy button
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});

// This code copies password generated to clipboard
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}
