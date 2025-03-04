let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

// кнопки 0 - 9
document.querySelectorAll('.btn-num').forEach(button => {
    button.addEventListener('click', function () {
        inputWindow.value += this.getAttribute('data-num');
    });
});


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

// кнопка С
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})
