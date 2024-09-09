add = (n1, n2) => {
    return Number(n1) + Number(n2)
}

subtract = (n1, n2) => {
    return Number(n1) - Number(n2)
}

multiply = (n1, n2) => {
    return Number(n1) * Number(n2)
}

divide = (n1, n2) => {
    return Number(n1)/Number(n2)
}

removeSpacesToArray = (inputString) => {
    let newString = inputString.split('').filter(num => num !== ' ')
    return newString
}

operate = (inputString) => {
    let mathArray = removeSpacesToArray(inputString)
    if (mathArray[1] === "+") {
        return add(mathArray[0],mathArray[2])
    } else if (mathArray[1] === "-") {
        return subtract(mathArray[0],mathArray[2])
    } else if (mathArray[1] === "*") {
        return multiply(mathArray[0],mathArray[2])
    } else if (mathArray[1] === "/") {
        return divide(mathArray[0],mathArray[2])
    }
}

console.log(operate("1/ 2"))