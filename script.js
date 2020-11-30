'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


function chatBot () {
    let numRandom = Math.floor(Math.random() * 101);
    function checkTheNum () {

        let userNum = prompt("Угадай число от 1 до 100");

        if (userNum === null ) { 
            alert("Игра окончена"); 
            return;
            } else if (!isNumber(userNum)) { 
            alert("Введи число"); 
            checkTheNum();
            } else if (numRandom < userNum) { 
            alert("Загаданное число меньше");
            checkTheNum();
            } else if (numRandom > userNum) {
            alert("Загаданное число больше"); 
            checkTheNum();
            } else if (Number(numRandom) === Number(userNum)) { 
            alert("Поздравляю, Вы угадали!!!");
            return; 
            } 
    } 
    return checkTheNum();
}

let guessNumber = chatBot();
guessNumber();



