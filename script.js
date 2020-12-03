'use strict';



const idStart = document.getElementById('start');
console.log(idStart);

const tagButtonPlus0 = document.getElementsByTagName('button')[0];
const tagButtonPlus1 = document.getElementsByTagName('button')[1];

console.log(tagButtonPlus0);
console.log(tagButtonPlus1);

const idCheckbox = document.querySelector('#deposit-check');

console.log(idCheckbox);

let additionalIncomeItem0 = document.querySelectorAll('.additional_income-item')[0];
let additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[1];

console.log(additionalIncomeItem0);
console.log(additionalIncomeItem1);

    function inputContainValue() {
        let allElements = document.getElementsByTagName("input");
        for(let i=0; i < allElements.length; i++)
        {
            if (allElements[i].className.includes('-value') === true) {
                window['inputContainValueInClassName' + i] = allElements[i];
            };
        }
    };

    inputContainValue();


    console.log(inputContainValueInClassName13);
    console.log(inputContainValueInClassName14);
    console.log(inputContainValueInClassName15);
    console.log(inputContainValueInClassName16);
    console.log(inputContainValueInClassName17);
    console.log(inputContainValueInClassName18);
    console.log(inputContainValueInClassName19);

    

let inputNotContainValueInClassName0 = document.querySelector(".salary-amount");
let inputNotContainValueInClassName1 = document.querySelector(".income-title");
let inputNotContainValueInClassName2 = document.querySelector(".income-amount");
let inputNotContainValueInClassName3 = document.querySelector(".additional_income-item");
let inputNotContainValueInClassName4 = document.querySelector(".additional_income-item");
let inputNotContainValueInClassName5 = document.querySelector(".expenses-title");
let inputNotContainValueInClassName6 = document.querySelector(".expenses-amount");
let inputNotContainValueInClassName7 = document.querySelector(".additional_expenses-item");
let inputNotContainValueInClassName8 = document.querySelector(".deposit-checkmark");
let inputNotContainValueInClassName9 = document.querySelector(".deposit-amount");
let inputNotContainValueInClassName10 = document.querySelector(".deposit-percent");
let inputNotContainValueInClassName11 = document.querySelector(".target-amount");
let inputNotContainValueInClassName12 = document.querySelector(".period-select");


console.log(inputNotContainValueInClassName1);
console.log(inputNotContainValueInClassName2);
console.log(inputNotContainValueInClassName3);
console.log(inputNotContainValueInClassName4);
console.log(inputNotContainValueInClassName5);
console.log(inputNotContainValueInClassName6);
console.log(inputNotContainValueInClassName7);
console.log(inputNotContainValueInClassName8);
console.log(inputNotContainValueInClassName9);
console.log(inputNotContainValueInClassName10);
console.log(inputNotContainValueInClassName11);
console.log(inputNotContainValueInClassName12);
    
    