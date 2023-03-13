// VARIABLES
let numbers = [];
let display = 0;

function add(array) {
  return array.reduce((total, number) => (total += number));
}

function subtract(array) {
  return array.reduce((total, number) => (total -= number));
}

function multiply(array) {
  return array.reduce((total, number) => (total *= number));
}

function divide(array) {
  return array.reduce((total, number) => (total /= number));
}
