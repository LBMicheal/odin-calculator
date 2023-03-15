let entry1 = 0;
let entry2 = 0;
let total = 0;

let operatorValue;

let display = document.querySelector(".display");

let entryBool = false;
let totalBool = false;

let addBool = false;
let subtractBool = false;
let multiplyBool = false;
let divideBool = false;

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
  if (number1 == 0 || number2 == 0) {
    return "No can do";
  } else {
    return number1 / number2;
  }
}
function operate(number1, number2, operator) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  switch (operator) {
    case add:
      return add(number1, number2);
    case subtract:
      return subtract(number1, number2);
    case multiply:
      return multiply(number1, number2);
    case divide:
      return divide(number1, number2);
  }
}

function updateDisplay(number) {
  if (display.textContent == total) {
    display.textContent = number;
  } else {
    display.textContent = display.textContent + number;
  }
  display.textContent = parseFloat(display.textContent);
}

function useOperator(operator) {
  if (entryBool === true) {
    entry2 = display.textContent;
    entryBool = false;
    display.textContent = 0;
    total = operate(entry1, entry2, operatorValue);
    display.textContent = total;
    entry1 = total;
    totalBool = true;
  } else if (totalBool === true) {
    entry2 = display.textContent;
    display.textContent = 0;
    total = operate(entry1, entry2, operatorValue);
    display.textContent = total;
    entry1 = total;
    totalBool = false;
    entryBool = true;
  } else {
    entry1 = display.textContent;
    total = entry1;
    entryBool = true;
    display.textContent = total;
  }
  operatorValue = operator;
}

function clear() {
  entry1 = 0;
  entry2 = 0;
  total = 0;
  display.textContent = 0;
  entryBool = false;
  totalBool = false;
  operatorValue = null;
}

function equals(operator) {
  total = operate(entry1, entry2, operator);
  display.textContent = total;
  entry1 = total;
  entryBool = false;
  totalBool = true;
}

// code for operators
const addButton = document.querySelector("#addButton");
addButton.addEventListener(
  "click",
  () => useOperator(add),
  (operatorValue = add)
);

const subtractButton = document.querySelector("#subtractButton");
subtractButton.addEventListener(
  "click",
  () => useOperator(subtract),
  (operatorValue = subtract)
);

const multiplyButton = document.querySelector("#multiplyButton");
multiplyButton.addEventListener(
  "click",
  () => useOperator(multiply),
  (operatorValue = multiply)
);

const divideButton = document.querySelector("#divideButton");
divideButton.addEventListener(
  "click",
  () => useOperator(divide),
  (operatorValue = divide)
);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => clear());

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => useOperator(operatorValue));

// code for number buttons
const one = document.querySelector("#one");
one.addEventListener("click", () => updateDisplay(1));

const two = document.querySelector("#two");
two.addEventListener("click", () => updateDisplay(2));

const three = document.querySelector("#three");
three.addEventListener("click", () => updateDisplay(3));

const four = document.querySelector("#four");
four.addEventListener("click", () => updateDisplay(4));

const five = document.querySelector("#five");
five.addEventListener("click", () => updateDisplay(5));

const six = document.querySelector("#six");
six.addEventListener("click", () => updateDisplay(6));

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => updateDisplay(7));

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => updateDisplay(8));

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => updateDisplay(9));

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => updateDisplay("."));
