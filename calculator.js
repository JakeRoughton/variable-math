const prompt = require('prompt-sync')({sigint: true});

//let allows you to reassign
// let exp1 = 1;
// exp1 = 2;

//const does not allow you to reassign
// const exp2 = 10;
// exp2 = 11;

// console.log(exp2);

// let test = prompt('Please enter some text:');
// console.log(test);

let num1 = Number(prompt(`Enter your first number: `));
let num2 = Number(prompt("Enter your second number: "));
let operator = prompt("Enter the operator (+,-,*,/): ");
let result = 0;
let printResult = true;

// console.log(num1 + " + " + num2 + " = " + result);
// console.log(`${num1} + ${num2} = ${result}`);

//if our operator variable is equal to a + sign, do whatever is inside the curly braces {}
// === checks for equality in js

//if true, I will do
if(operator === "+"){
    result = num1 + num2;
} else if(operator === "-"){
    result = num1 - num2;
} else if(operator === "*"){
    result = num1 * num2;
} else if(operator === "/"){
    result = num1 / num2;
} else {
    console.log("Invalid operator");
    printResult = false;
}


if(printResult === true){
    console.log(`${num1} ${operator} ${num2} = ${result}`);
}