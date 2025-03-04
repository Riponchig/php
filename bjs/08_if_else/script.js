// ввод максимума и минимума (страховка от ввода текста)
let minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;

// Ограничение диапазона значений
minValue = minValue < -999 ? -999 : minValue;
maxValue = maxValue > 999 ? 999 : maxValue;


alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

// первое число
let answerNumber  = Math.floor((minValue + maxValue) / 2);

// Сбрасываем количество попыток и статус игры
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

// Обновляем интерфейс
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

// генератор фраз

function getRandomPhraseGood() {
    const phrases = [
        `Да это легко! Ты загадал ${answerNumber}?`,
        `Наверное, это число ${answerNumber}?`,
        `Дай угадаю! Это ${answerNumber}?`
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
}
function getRandomPhraseBad() {
    const phrases = [
        `Вы загадали неправильное число!\n\u{1F914}`,
        `Я сдаюсь..\n\u{1F92F}`,
        `Я не смог ...\n\u{1F92F}`
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
}

// кнопка повтор
document.getElementById('btnRetry').addEventListener('click', function () {
    // ввод максимума и минимума (страховка от ввода текста)
    let minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
    let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;

    // Ограничение диапазона значений
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = maxValue > 999 ? 999 : maxValue;

    // Сбрасываем количество попыток и статус игры
    let orderNumber = 1;
    let gameRun = true;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    // первое число
    let answerNumber  = Math.floor((minValue + maxValue) / 2);

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

// кнопка <
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = getRandomPhrasBad();

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getRandomPhraseGood();
        }
    }
});

// кнопка >
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = getRandomPhraseBad();

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1; 
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getRandomPhraseGood();
        }
    }
});

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

