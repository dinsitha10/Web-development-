let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return;
    if (currentInput === '0' && number !== '.') currentInput = '';
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    currentInput += ' ' + operator + ' ';
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function backspace() {
    currentInput = currentInput.trim();
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput;
    }
    if (currentInput === '') display.innerText = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/'));
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
    }
}