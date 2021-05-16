var generateBtn = document.querySelector("#generate");
// Variables Charachters for password 
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
 "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"]
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 var specialChar = ["!", "@", "&", "$","#", "%", "^", "*", ">", "<", "/", "~", "=", "+", "-"]

function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;

}


generateBtn.addEventListener("click", writePassword);

// Checks arrays length and randomly selects 
function random(arr) {
  let randomindex = Math.floor(Math.random()*arr.length)
  return arr[randomindex]
} 

function passwordOps() {
  let passwordLength = parseInt(prompt ("How many characters do you want your password? (between 8 and 128 characters)"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Passworf length must be between 8 and 128.")
    return passwordOps()
  }
// Prompts
 let uppers = confirm("Do you need to include Uppercase Letters?")
 let lowers = confirm("Do you need to include Lowercase Letters?")
 let numbers = confirm("Do you need to include Numbers?")
 let specchar = confirm("Do you need to include Special Characters?")
 
 let choices = {
    passwordLength, uppers, lowers, numbers, specchar
  }
  return choices
}

function genPassword() {
  let choices = passwordOps();
  let change = []
  let guaranted = []
  let finalPW = []

  //if loops upn selecting choices
if (choices.specchar) {
  change =[...change, ...specialChar]
  guaranted.push(random(specialChar))
  }

if (choices.lowers) {
  change = change.concat(lowerChar)
  guaranted.push(random(lowerChar))
}

if (choices.numbers) {
  change = change.concat(numChar)
  guaranted.push(random(numChar))
}

if (choices.uppers) {
  change = change.concat(upperChar)
  guaranted.push(random(upperChar))
}

console.log(change)
console.log(guaranted)


for(let i = 0; i < choices.passwordLength; i++) {
finalPW.push(random(change))
}
for(let i = 0; i < guaranted.length; i++) {
  finalPW[i] = guaranted[i]
  }
return finalPW.join("")
}
