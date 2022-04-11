let inputField = document.querySelector('.input-field');

let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        inputField.textContent = number.textContent;
        operation = new Operation(numberStore, operandStore, inputField.textContent)
        console.log(operation)
        console.log(numberStore)
        console.log(operandStore)
    })
});

// this adding opernads to input field liley to be uneccesary 
let operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        numberStore = inputField.textContent
        operandStore = operand.textContent
    })
});



 function Operation(first, operand, last) {
    this.first = first;
    this.operand = operand;
    this.last = last;
};

let operation; 


let numberStore;
let operandStore;


//calculator example never shows the operand in the thing just the last number pressed
//stores the numbers and the operand, then calculates when = is pressed
// 1+2=3 will show 
// 1
// 2
// 3
// but with string of calculation eg 1+2+4=7 will show
// 1 (pressed number)       1
//                          +
// 2 (presed number)        2
// 3 (calculated number)    +
// 4 (pressed number)       4
//                          =    
// 7 (calculated number)    7
// so do we only  need to store 1 number at a time? first number in varaible somewhere, second nmber stored in input field 
// then calculated number becomes stored number when operand and new number pressed



const operate = function(first, operand, last) {
    if (operand === '+') {
        add(first, last)
        console.log(add(first, last))
    }
}

//const functionArray = [add, subtract, divide, multiply]



let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    operate(numberStore, operandStore, inputField.textContent)
})


const add = function(a, b) {
    console.log(+a + +b)
	return +a + +b
};

const subtract = function(a, b) {
	return a - b
};


const divide = function(a, b) {
    return a / b
}

const multiply = function(a, b) {
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
console.log(factAns)  
return factAns
};


