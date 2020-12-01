'use strict'
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let isString = function(str) {
    return (typeof str === "string" || str instanceof String);
};

let str = prompt("Введите строку");

function func (str) {
    if (!isString(str)) {
        alert("Это не строка!");
    }

    str = str.replace(/\s+/g, '');
    console.log("Без пробелов "+ str);

    if(str.length > 30) {
        str = str.substr(0, 30) + '...';
    }
    console.log("Замена на ... после 30ого символа: " + str);
}

func(str);