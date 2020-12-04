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



let resultTotalBudgetMonthValue = document.getElementsByClassName("result-total budget_month-value")[0];
let resultTotalBudgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0];
let resultTotalExpensesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0];
let resultTotalAdditionalIncomeValue  = document.getElementsByClassName('result-total additional_income-value')[0];
let resultTotalAdditionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value')[0];
let resultTotalIncomePeriodValue = document.getElementsByClassName('result-total income_period-value')[0];
let resultTotalTargetMonthValue = document.getElementsByClassName('result-total target_month-value')[0];

   /* function inputContainValue() {
        let allElements = document.getElementsByTagName("input");
        for(let i=0; i < allElements.length; i++)
        {
            if (allElements[i].className.includes('-value') === true) {
                window['inputContainValueInClassName' + i] = allElements[i];
            };
        }
    };
    inputContainValue();*/


    console.log(resultTotalBudgetMonthValue);
    console.log(resultTotalBudgetDayValue);
    console.log(resultTotalExpensesMonthValue);
    console.log(resultTotalAdditionalIncomeValue);
    console.log(resultTotalAdditionalExpensesValue);
    console.log(resultTotalIncomePeriodValue);
    console.log(resultTotalTargetMonthValue);

    

let salaryAmount = document.querySelector(".salary-amount");
let incomeTitle1 = document.querySelector(".income-title1");
let incomeAmount = document.querySelector(".income-amount");

let expensesTitle1 = document.querySelector(".expenses-title1");
let expensesAmount = document.querySelector(".expenses-amount");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");

let targetAmount = document.querySelector(".target-amount");
let periodSelect = document.querySelector(".period-select");


console.log(salaryAmount);
console.log(incomeTitle1);
console.log(incomeAmount);
console.log(expensesTitle1);
console.log(expensesAmount);
console.log(additionalExpensesItem);
console.log(targetAmount);
console.log(periodSelect);