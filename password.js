const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^&*()_+/"

const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

// selectors
const passBox = document.querySelector('#pass-box')
const totalChar =document.querySelector('#total-char')
const upperInput = document.querySelector('#upper-case')
const lowerInput = document.querySelector('#lower-case')
const numberInput = document.querySelector('#numbers')
const symbolInput = document.querySelector('#symbols')


const passwordGenerator = (password = '')=>{
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }

    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }

    if(numberInput.checked){
        password += getRandomData(numberSet)
    }

    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }

    if(password.length < totalChar.value ){
        return passwordGenerator(password)
    }

    passBox.textContent = truncatString(password, totalChar.value)
}

document.querySelector('#button').addEventListener('click',()=>{
    passwordGenerator()
    
})

passBox.textContent=""

function truncatString(str,num){
    if(str.length>num){
        return str.substring(0,num)
    }else{
        return str;
    }
}