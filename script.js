let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
 alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${numberToText(answerNumber)}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Введите минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Введите максимальное знание числа для игры', 'до бесконечности'));

    orderNumber = 1;
    gameRun = true;
    answerNumber = Math.floor((maxValue + minValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали число вне границ?\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
                `Наверное, я просто не умею угадывать чисел!\n\u{1F615}`;
                `Может быть, вы не знаете, как играть?\n\u{1F926}`;
                

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Может ваше число ${numberToText(answerNumber)}?`;
        }
    }
});


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Это что за число такое?\n\u{1F914}` :
                `Ладно, ты победил..\n\u{1F92F}`;
                `Может, я потерял свой прайм в Угадайке?\n\u{1F926}`;
                `Может ты меня обманул?\n\u{1F926}`;


            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1; 
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Может ваше число ${numberToText(answerNumber)}?`;
        }
    }
});

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
});




function numberToText(num) {
    const units =  [
        'ноль', 'один', 'два', 'три', 'четыре', 'пять', 
        'шесть', 'семь', 'восемь', 'девять', 'десять', 
        'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 
        'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 
        'девятнадцать'
    ];
    
    const tens =  [
        '', '', 'двадцать', 'тридцать', 'сорок', 
        'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 
        'девяносто'
    ];
    
    const hundreds =  [
        '', 'сто', 'двести', 'триста', 'четыреста', 
        'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 
        'девятьсот'
    ];

    if (num === 0) {
        return 'ноль';
    }

    let result = ''

    if (num < 0) {
        result += 'минус ';
        num = Math.abs(num);
    }

    if (num < 20) {
        result += units[num];
    } else if (num < 100) {
        const tenPart = Math.floor(num / 10);
        const unitPart = num % 10;
        result += tens[tenPart];
        if (unitPart > 0) {
            result += '' + units[unitPart];
        }
    } else if (num < 1000) {
        const hundredPart = Math.floor(num / 100);
        const remainder = num % 100;
        result += hundreds[hundredPart];
        if (remainder > 0) {
            if (remainder < 20) {
                result += '' + units[remainder];
            } else {
                const tenPart = Math.floor(remainder / 10);
                const unitPart = remainder % 10;
                result += ' ' + tens[tenPart];
                if (unitPart > 0) {
                result += ' ' + units[unitPart];
                }
            }
        }
    }

    return result.trim('');
}