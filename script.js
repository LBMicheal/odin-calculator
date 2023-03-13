// VARIABLES
let numbers = [];
let number1 = 8;
let number2 = 4;
let operator;
let display = 0;

// MATH FUNCTIONS
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// function for running the math functions
function operate(operator, number1, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
      break;
    case "-":
      return subtract(number1, number2);
      break;
    case "*":
      return multiply(number1, number2);
      break;
    case "/":
      return divide(number1, number2);
      break;
    default:
      return "OOPS";
  }
}

// functions for the keypad on calculator
const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", () => console.log("Test"));
