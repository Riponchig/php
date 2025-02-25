let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_num').addEventListener('click', function () {
    inputWindow.value += this.getAttribute('data-num');
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum'){
        const resultat = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand =0;
        inputWindow.value = resultat;
    }
    if (operation === 'def'){
        const resultat = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand =0;
        inputWindow.value = resultat;
    }
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})
