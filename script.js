// VARIABLES
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
    case add:
      return add(number1, number2);
      break;
    case subtract:
      return subtract(number1, number2);
      break;
    case multiply:
      return multiply(number1, number2);
      break;
    case divide:
      return divide(number1, number2);
      break;
    default:
      return "OOPS";
  }
}
