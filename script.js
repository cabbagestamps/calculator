let inputField = document.querySelector('.input-field');

let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (operandEquality) {
            inputField.textContent = ''
            operandEquality = false
        }
        if (equalsEquality) {
            inputField.textContent = ''
            equalsEquality = false
        }
        inputField.textContent += number.textContent;
    })
});


let operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        if (operandStore) {
            let operation = new Operation(+numberStore, operandStore, +inputField.textContent)
            inputField.textContent = operate(operation.first, operation.operand, operation.last)
        }
        numberStore = inputField.textContent
        operandStore = operand.textContent
        operandEquality = true

    })
});

// this constructor may not be necessary but it sure is fun to have around
 function Operation(first, operand, last) {
    this.first = first;
    this.operand = operand;
    this.last = last;
};

let numberStore;
let operandStore;
let operandEquality

const operate = function(first, operand, last) {
    if (operand === '+') {return add(first, last)};
    if (operand === '-') {return subtract(first, last)}; 
    if (operand === '/') {return divide(first, last)};
    if (operand === '*') {return multiply(first, last)};
    if (operand === '^') {return power(first, last)}
    if (operand === '!') {return factorial(last)}
}

let equalsEquality; 

//const functionArray = [add, subtract, divide, multiply]

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    let operation = new Operation(+numberStore, operandStore, +inputField.textContent)
    console.log(operation)
    operandStore = ''
    operandEquality = false
   // numberStore = ''
    inputField.textContent = operate(operation.first, operation.operand, operation.last)
    equalsEquality = true
    
})

let allClear = document.querySelector('#clear');
allClear.addEventListener('click', () => {
    inputField.textContent = '';
    numberStore = '';
    operandStore = '';
    operandEquality = false;
    equalsEquality = false;
})

const add = function(a, b) {
    console.log(a + b)
	return a + b
};

const subtract = function(a, b) {
    console.log(a - b)
	return a - b
};

const divide = function(a, b) {
    console.log(a/b)
    if (b === 0) {
        return 'UNDEFINED'
    }
    return a / b
}

const multiply = function(a, b) {
    console.log(a*b)
  return a * b;
};
const power = function(a, b) {
    let powerAns = 1;
    let x = b - 1
    for (let i=0; i<b; i++) {
        powerAns *= a  
    }
    return powerAns
};

const sum = function(a) {
    let sumAns = 0;
    let length = a.length
      for (let i=0; i<length; i++) {
      sumAns += a[i]
    }
    return sumAns;
  };

const factorial = function(a) {
	let factAns = 1;
  for (let i=1; i<a+1; i++) {
    factAns *= i;
  } 
return factAns
};


