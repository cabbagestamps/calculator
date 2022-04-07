let inputField = document.querySelector('.input-field');

let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        inputField.textContent += number.textContent;
    })
});

// this adding opernads to input field liley to be uneccesary 
let operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        inputField.textContent += operand.textContent;
    })
});



let equals = document.querySelector('.equals');
