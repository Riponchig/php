let lastOperand = 0;
let operation = null;
let result;

const inputWindow = document.getElementById('inputWindow');

// кнопки 0 - 9
document.querySelectorAll('.btn-num').forEach(button => {
    button.addEventListener('click', function () {
        inputWindow.value += this.getAttribute('data-num');
    });
});

// кнопки + - * / sqrt
document.querySelectorAll('.btn-op').forEach(button => {
    button.addEventListener('click', function () {
        if (this.getAttribute('data-op') === "sqrt") {
            inputWindow.value = Math.sqrt(parseFloat(inputWindow.value));
            return;
        }
        lastOperand = parseFloat(inputWindow.value);
        operation = this.getAttribute('data-op');
        inputWindow.value = "";
    });
});

// Кнопка =
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation) {
        let currentOperand = parseFloat(inputWindow.value);
        switch (operation) {
            case '+': result = lastOperand + currentOperand; 
            break;
            case '-': result = lastOperand - currentOperand; 
            break;
            case '*': result = lastOperand * currentOperand;
            break;
            case '/': result = currentOperand !== 0 ? lastOperand / currentOperand : 'Division by 0'; break;
        }
        inputWindow.value = result;
        operation = null;
        lastOperand = 0;
    }
});

// кнопка С
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})
