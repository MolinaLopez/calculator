const add = function() {
  let sum = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const minus = function() {
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