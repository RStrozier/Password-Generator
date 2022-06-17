// Assignment Code
var generateBtn = document.querySelector("#generate");

// My code variables
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var specialC =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var passwordLength;
var combos = [];

// When I click on the button, I am presented with prompts for password length criteria 
function criteria(){
  var invalidResponse = true;

  while(invalidResponse){
    passwordLength = prompt("How long do you want your password to be? Minimum password characters:8, maximum characters:128");
    console.log("passwordLength");
    if(passwordLength >= 8 && passwordLength <= 128){
      alert("You chose" + passwordLength);
      invalidResponse = false;
    }
    else {
      alert("Password length not between 8-128 characters. Please try again.");
    }
  }
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var useAlphaUpper = confirm("Does this password contain uppercase letters?");
  console.log("useAlphaUpper");
  if (useAlphaUpper === true){
    alert("This password will contain an uppercase letter.")
  }
  else {
    alert("This password will not contain an uppercase letter");
  }
  var useLowerC = confirm("Does this password contain uppercase letters?");
  console.log("useLowerC");
  if(lowerC === true){
    alert("This password will contain a lowercase letter.")
  }
  else {
    alert("This password will not contain lowercase letters.")
  }
  var useSpecialC = confirm("Does this password contain special characters?");
  console.log("useSpecialC");
  if(specialC === true){
    alert("This password will contain special characters.")
  }
  else {
    alert("This password will not contain special characters.");
  }
  var useNumeric = confirm("Does this password contain numbers?");
  console.log("useNumeric");
  if(numeric === true){
    alert("This password will contain a number.");
  }
  else {
    alert("This password will not contain numbers.");
  }
  // if no options are chosen
  if (!useAlphaUpper && !useLowerC && !useSpecialC && !useNumeric) {
    alert("Please make a selection for criteria.");
  }
}

// WHEN all prompts are answered THEN a password is generated that matches the selected criteria
function generatePassword() {
  criteria();
  if (alphaUpper) {
    for (var i of alphaUpper) 
    combos.push(i);
  }
  if (lowerC) {
    for (var i of lowerC) 
    combos.push(i);
  }

  if(specialC){
    for (var i of specialC) 
    combos.push(i);
  }

  if(numeric){
    for (var i of numeric)
    combos.push(i);
  }

  console.log(combos);

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  var finalPass = "";
  for (var i = 0; i < passwordLength; i++) {
    finalPass += combos[Math.floor(Math.random() * combos.length)];
  }
  console.log(finalPass);
  return finalPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  document.getElementById("password").textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
