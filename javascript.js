addition = (n1, n2) => {
    return Number(n1) + Number(n2)
}

subtraction = (n1, n2) => {
    return Number(n1) - Number(n2)
}

multipllication = (n1, n2) => {
    return Number(n1) * Number(n2)
}

division = (n1, n2) => {
    return Number(n1)/Number(n2)
}

intepreteStrings = (inputString) => {
    let newString = inputString.split('')
    let operator

    if (isNaN(inputString.slice(-1))) {
        operator = newString.pop()
    } 

    if (newString.findIndex(element => element === '+') !== -1){
        //addition
        let sliceIndex = newString.findIndex(element => element === '+')
        let firstNum = newString.slice(0,sliceIndex).join('')
        let lastNum = newString.slice(sliceIndex+1).join('')
        //check for one more operator
        if (operator !== undefined) {
            return [firstNum,'+',lastNum,operator]
        }
        return [firstNum,'+',lastNum]
    } else if (newString.findIndex(element => element === '-') !== -1) {
        //substraction
        let sliceIndex = newString.findIndex(element => element === '-')
        let firstNum = newString.slice(0,sliceIndex).join('')
        let lastNum = newString.slice(sliceIndex+1).join('')
        if (operator !== undefined) {
            return [firstNum,'-',lastNum,operator]
        }
        return [firstNum,'-',lastNum]
    } else if (newString.findIndex(element => element === '*') !== -1) {
        //multiplication
        let sliceIndex= newString.findIndex(element => element === '*')
        let firstNum = newString.slice(0,sliceIndex).join('')
        let lastNum = newString.slice(sliceIndex+1).join('')
        if (operator !== undefined) {
            return [firstNum,'*',lastNum,operator]
        }
        return [firstNum,'*',lastNum]
    } else if (newString.findIndex(element => element === '/') !== -1) {
        //division
        let sliceIndex= newString.findIndex(element => element === '/')
        let firstNum = newString.slice(0,sliceIndex).join('')
        let lastNum = newString.slice(sliceIndex+1).join('')
        if (operator !== undefined) {
            return [firstNum,'/',lastNum,operator]
        }
        return [firstNum,'/',lastNum]
    }


}

operate = (inputString) => {
    let mathArray = intepreteStrings(inputString)
    console.log(mathArray)
    if (mathArray[1] === "+") {
        if (mathArray.length === 4){
            return addition(mathArray[0],mathArray[2]) + mathArray[3]
        }
        return addition(mathArray[0],mathArray[2])
    } else if (mathArray[1] === "-") {
        if (mathArray.length === 4){
            return subtraction(mathArray[0],mathArray[2]) + mathArray[3]
        }
        return subtraction(mathArray[0],mathArray[2])
    } else if (mathArray[1] === "*") {
        if (mathArray.length === 4){
            return multipllication(mathArray[0],mathArray[2]) + mathArray[3]
        }
        return multipllication(mathArray[0],mathArray[2])
    } else if (mathArray[1] === "/") {
        if (mathArray.length === 4){
            return division(mathArray[0],mathArray[2]) + mathArray[3]
        }
        return division(mathArray[0],mathArray[2])
    }
}

const input = document.querySelector('.input')

const one = document.querySelector('#one')
one.addEventListener("click", () => {
    input.value += "1"
})

const two = document.querySelector('#two')
two.addEventListener("click", () => {
    input.value += "2"
})

const three = document.querySelector('#three')
three.addEventListener("click", () => {
    input.value += "3"
})

const four = document.querySelector('#four')
four.addEventListener("click", () => {
    input.value += "4"
})

const five = document.querySelector('#five')
five.addEventListener("click", () => {
    input.value += "5"
})

const six = document.querySelector('#six')
six.addEventListener("click", () => {
    input.value += "6"
})

const seven = document.querySelector('#seven')
seven.addEventListener("click", () => {
    input.value += "7"
})

const eight = document.querySelector('#eight')
eight.addEventListener("click", () => {
    input.value += "8"
})

const nine = document.querySelector('#nine')
nine.addEventListener("click", () => {
    input.value += "9"
})

const zero = document.querySelector('#zero')
zero.addEventListener("click", () => {
    input.value += "0"
})

const divide = document.querySelector('#divide')
divide.addEventListener("click", () => {
    input.value += "/"
})

const multiply = document.querySelector('#multiply')
multiply.addEventListener("click", () => {
    input.value += "*"
})

const minus = document.querySelector('#minus')
minus.addEventListener("click", () => {
    input.value += "-"
})

const plus = document.querySelector('#plus')
plus.addEventListener("click", () => {
    input.value += "+"
})

const clear = document.querySelector('#clear')
clear.addEventListener("click", () => {
    input.value = ""
})

const equal = document.querySelector('#equal')
equal.addEventListener("click", () => {
    const answer = operate(input.value)
    input.value = answer
})