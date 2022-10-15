const add = function(num1, num2) {
  let result = 0;
	result += num1 + num2;
  return result
};

const subtract = function(num1, num2) {
  let result = 0;
	result += num1 - num2;
  return result
};

const sum = function(...args) {
	let result = 0;
	for(let i = 0; i < args[0].length; i++ ) {
    result += args[0][i];
  }
  return result
};

const multiply = function(...args) {
  let result = 1;
	for(let i = 0; i < args[0].length; i++ ) {
    result *= args[0][i];
  }
  return result
};

const power = function(num1, num2) {
	let result = 0;
  result = Math.pow(num1, num2);
  return result;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let result = 1;
	for(let i = num; i > 0; i--) {
    result *= i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

add(2, 3, 5);