let display = document.getElementById('display');
let calculation = '';

function updateDisplay() {
    display.value = calculation;
}

function append(value) {
    calculation += value;
    updateDisplay();
}

function clearDisplay() {
    calculation = '';
    updateDisplay();
}

function clearLastEntry() {
    calculation = calculation.slice(0, -1);
    updateDisplay();
}