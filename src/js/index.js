const btnAC = document.getElementById('btnAC');
const backspace = document.getElementById('backspace');

const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnComma = document.getElementById('btnComma');
const btnProcent = document.getElementById('btnProcent');
const btnComplies = document.getElementById('btnComplies');

const btnButtonision = document.getElementById('btnButtonision');

const btnMultiplication = document.getElementById('btnMultiplication');

const btnNumber0 = document.getElementById('btnNumber0');
const btnNumber1 = document.getElementById('btnNumber1');
const btnNumber2 = document.getElementById('btnNumber2');
const btnNumber3 = document.getElementById('btnNumber3');
const btnNumber4 = document.getElementById('btnNumber4');
const btnNumber5 = document.getElementById('btnNumber5');
const btnNumber6 = document.getElementById('btnNumber6');
const btnNumber7 = document.getElementById('btnNumber7');
const btnNumber8 = document.getElementById('btnNumber8');
const btnNumber9 = document.getElementById('btnNumber9');

const displayValue = document.getElementById('displayValue');


// Calculator

function addToDisplay(value) {
    displayValue.value += value;
}

btnNumber1.addEventListener('click', () => addToDisplay('1'));
btnNumber2.addEventListener('click', () => addToDisplay('2'));
btnNumber3.addEventListener('click', () => addToDisplay('3'));
btnNumber4.addEventListener('click', () => addToDisplay('4'));
btnNumber5.addEventListener('click', () => addToDisplay('5'));
btnNumber6.addEventListener('click', () => addToDisplay('6'));
btnNumber7.addEventListener('click', () => addToDisplay('7'));
btnNumber8.addEventListener('click', () => addToDisplay('8'));
btnNumber9.addEventListener('click', () => addToDisplay('9'));
btnNumber0.addEventListener('click', () => addToDisplay('0'));

btnPlus.addEventListener('click', () => addToDisplay('+'));
btnMinus.addEventListener('click', () => addToDisplay('-'));
btnMultiplication.addEventListener('click', () => addToDisplay('*'));
btnButtonision.addEventListener('click', () => addToDisplay('/'));

btnComma.addEventListener('click', () => addToDisplay('.'));
btnProcent.addEventListener('click', () => addToDisplay('/100'));


btnAC.addEventListener('click', function() {
    displayValue.value = '';
});
backspace.addEventListener('click', function() {
    displayValue.value = displayValue.value.slice(0, -1);
});

btnComplies.addEventListener('click', () => {
    try {
        displayValue.value = eval(displayValue.value);
    } catch (error) {
        displayValue.value = 'Error';
    }
});