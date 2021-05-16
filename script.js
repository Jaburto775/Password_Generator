var generateBtn = document.querySelector("#generate");

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
 "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"]
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">","/", "~", "=", "+", "-"]


function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;

}


generateBtn.addEventListener("click", writePassword);

function random(arr) {
  let randomindex = Math.floor(Math.random()*arr.length)
  return arr[randomindex]
} 

function passwordOptions() {
  let passwordLength = parseInt(prompt ("How many characters do you want your password? (between 8 and 128 characters)"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Passworf length must be between 8 and 128.")
    return passwordOptions()
  }
    
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
  let choices = passwordOptions();
  let concats = []
  let guaranted = []
  let finalpassword = []
if (choices.specchar) {
  concats =[...concats, ...specialChar]
  guaranted.push(random(specialChar))
  }

if (choices.numbers) {
  concats = concats.concat(numChar)
  guaranted.push(random(numChar))
}

if (choices.lowers) {
  concats = concats.concat(lowerChar)
  guaranted.push(random(lowerChar))
}

if (choices.uppers) {
  concats = concats.concat(upperChar)
  guaranted.push(random(upperChar))
}
console.log(concats)
console.log(guaranted)


for(let i = 0; i < choices.passwordLength; i++) {
finalpassword.push(random(concats))
}
for(let i = 0; i < guaranted.length; i++) {
  finalpassword[i] = guaranted[i]
  }
return finalpassword.join("")
}
