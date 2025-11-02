console.log("WElcome to the Basic Calculator");

let num1 = 12;
let num2 = 4;
let operator = "+";

console.log('Calculating: ${num1} ${operator} ${num2}');

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
        case "-":
            result =num1 - num2;
            break;
            case"*":
            result = num1 * num2;
            break;
            case "/":
                if (num2 !==0) {
                    result = num1 / num2;
                } else {
                    result = "Cannot divide by zero!";
                }
                break;
                default:
                    result = "Invalid operator!";
                }
console.log ('Result: ${result}');
function calculate(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
            case"-":
            return a - b;
            case "*":
            return a * b;
            case "/":
                return b !== 0 ? a / b : "Cannot divide by zero!";
                default:
                    return " Invalid operator!";

    }
}

console.log("Function Result:", calculate(15, 3, "*"));

const prompt = require("prompt-sync")({ sigint: true});

const n1 = parseFloat(prompt("Enter first number: "));
const n2 = parseFloat(prompt("Enter second number: "));
const op = prompt("Enter operator (+, -, *, /): ");

console.log('/n Calculating: &{n1} ${op} ${n2}');
console.log("REsult:", calculate(n1, n2, op));
