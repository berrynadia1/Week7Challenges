var firstNum = prompt("Enter the first number");
var operator = prompt("Enter the operator");
var secondNum = prompt("Enter the second number");



function sum(firstNum, secondNum) {
    return firstNum + secondNum;
}
function subtraction(firstNum, secondNum){
    return firstNum - secondNum;
}
function multiplication(firstNum, secondNum){
    return firstNum * secondNum;
}
function division(firstNum, secondNum){
    return firstNum / secondNum;
}





if(operator == "+"){
    console.log(sum(parseFloat(firstNum),parseFloat(secondNum)));
}
else if(operator == "-"){
    console.log(subtraction(parseFloat(firstNum), parseFloat(secondNum)));
}
else if(operator == "*"){
    console.log(multiplication(parseFloat(firstNum), parseFloat(secondNum)));
}
else if(operator == "/"){
    console.log(division(parseFloat(firstNum), parseFloat(secondNum)));
}
else{
    console.log("This is not a symbol")
}



// console.log(add(parseFloat(firstNum), parseFloat(secondNum));
// console.log(subtract(parseFloat(firstNum), parseFloat(secondNum));
// console.log(multiply(parseFloat(firstNum), parseFloat(secondNum));
// console.log(divide(parseFloat(firstNum), parseFloat(secondNum));