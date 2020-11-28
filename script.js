'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


function Init () {
    let numRandom = Math.floor(Math.random() * 101);

function chatBot (numRandom) {
    
    let num = prompt("Угадай число от 1 до 100");

    if (num === null ) { 
        alert("Игра окончена"); 
        return;
        }

    function checkTheNum () {
        
        if (!isNumber(num)) { 
            num = prompt("Введи число"); 
            checkTheNum();
            }
    } 

    checkTheNum();

    if (numRandom < num) { 
        alert("Загаданное число меньше");
        } else if (numRandom > num) {
        alert("Загаданное число больше"); 
        } else if (Number(numRandom) === Number(num)) { 
        alert("Поздравляю, Вы угадали!!!");
        return;
        }
    
    
    if (num !== numRandom) { chatBot(numRandom); }
};

chatBot(numRandom);

};

Init();



