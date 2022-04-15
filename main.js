// DOM access
const generatePassword = document.querySelector(".generator-btn")
let passwordOneBtn = document.querySelector(".passwordOne-btn")
let passwordTwoBtn = document.querySelector(".passwordTwo-btn")
let passwordThreeBtn = document.querySelector(".passwordThree-btn")
let passwordFourBtn = document.querySelector(".passwordFour-btn")

// passsword Data
let char = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
let passwordLength = 15
let password = ""

// password function & generator
function createPassword(){
    password = ""
    for(let i = 0; i < passwordLength; i++){
        let randomChar = Math.floor(Math.random() * char.length)
        password += char.substring(randomChar, randomChar + 1)
    }
    return password
}

generatePassword.addEventListener("click", function(){
    passwordOneBtn.textContent = createPassword()
    passwordTwoBtn.textContent = createPassword()
    passwordThreeBtn.textContent = createPassword()
    passwordFourBtn.textContent = createPassword()
})
