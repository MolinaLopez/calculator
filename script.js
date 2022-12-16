const add = function() {
  let sum = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const subtract = function() {
  let sum = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    sum -= arguments[i];
  }
  return sum;
}

const multiply = function() {
  let sum = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    sum *= arguments[i];
  }
  return sum;
}

const divide = function() {
  let sum = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    sum /= arguments[i];
  }
  return sum;
}

const operate = function(n1, op, n2) {
  let numberOne = n1;
  let numberTwo = n2;
  let operator = op;

  if (operator === 'opAdd') {
    return add(numberOne, numberTwo);
  } else if (operator === 'opSubtract') {
    return subtract(numberOne, numberTwo);
  } else if (operator === 'opMultiply') {
    return multiply(numberOne, numberTwo);
  } else if (operator === 'opDivide' && numberTwo !== 0) {
    return divide(numberOne, numberTwo);
  } else {
    return 'Error'
  }
}

const display = document.getElementById('display');
let displayValue = '0';
display.textContent = displayValue;

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
  })
})