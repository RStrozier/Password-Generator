// Assignment Code
var generateBtn = document.querySelector("#generate");

// My code variables
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var specialC =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var passwordLength;

// When I click on the button, I am presented with prompts for password length criteria 
function criteria(){
  passwordLength = prompt("How long do you want your password to be? Minimum password characters:8, maximum characters:128");
  console.log("passwordLength");
  if(passwordLength >= 8 && passwordLength <= 128){
    alert("You chose" + passwordLength);
    }
    else {
      alert("Password length not between 8-128 characters. Please try again.");
      return;
}

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
alphaUpper = confirm("Does this password contain uppercase letters?");
console.log("alphaUpper");
if (alphaUpper === true){
 alert("This password will contain an uppercase letter.")
}
else {
  alert("This password will not contain an uppercase letter");
}
lowerC = confirm("Does this password contain uppercase letters?");
console.log("lowerC");
if(lowerC === true){
  alert("This password will contain a lowercase letter.")
}
else {
  alert("This password will not contain lowercase letters.")
}
specialC = confirm("Does this password contain special characters?");
console.log("specialC");
if(specialC === true){
  alert("This password will contain special characters.")
}
else {
  alert("This password will not contain special characters.");
}
numeric = confirm("Does this password contain numbers?");
console.log("numeric");
if(numeric === true){
  alert("This password will contain a number.");
}
else {
  alert("This password will not contain numbers.");
}
}

// if no options are chosen
if (!alphaUpper && !lowerC && !specialC && !numeric) {
  alert("Please make a selection for criteria.");
  return;
}

// WHEN all prompts are answered THEN a password is generated that matches the selected criteria
function generatePassword() {
  var passwordOption = criteria();
  var combos = [];

if (passwordOption.alphaUpper) {
  for (var i of alphaUpper) 
  combos.push(i);
}

if (passwordOption.lowerC) {
  for (var i of lowerC) 
  combos.push(i);
}

if(passwordOption.specialC){
  for (var i of specialC) 
  combos.push(i);
}

if(passwordOption.numeric){
  for (var i of numeric)
  combos.push(i);
}

console.log(combos);
}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
var finalPass = "";
for (var i = 0; i < passwordOption.length; i++) {
  finalPass += combos[Math.floor(Math.random() * combos.length)];
}

console.log(finalPass);
return finalPass;

document.getElementById("display").textContent = finalPass;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

