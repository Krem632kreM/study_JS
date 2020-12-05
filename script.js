'use strict';

let startButton = document.getElementById('start');
let expensesPlus0 = document.getElementsByTagName('button')[0];
let expensesPlus1 = document.getElementsByTagName('button')[1];
let idCheckbox = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let budgetMonthValue = document.getElementsByClassName("result-total budget_month-value")[0];
let budgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0];
let additionalIncomeValue  = document.getElementsByClassName('result-total additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('result-total income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('result-total target_month-value')[0];
let salaryAmount = document.querySelector(".salary-amount");
let incomeTitle1 = document.querySelector(".income-title1");
let incomeAmount = document.querySelector(".income-amount");
let expensesTitle1 = document.querySelector(".expenses-title1");
let expensesItems = document.querySelectorAll(".expenses-items");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");
let targetAmount = document.querySelector(".target-amount");
let periodSelect = document.querySelector(".period-select");
let incomeItems = document.querySelectorAll(".income-items");

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let appData = {
    budget: 0,
    budgetDay: null,
    budgetMonth: null,
    expensesMonth: null,  
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0, 
    start: function() {

        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
    },
    
    showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.floor(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(", ");
        additionalIncomeValue.value = appData.addIncome.join(", ");
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        incomePeriodValue.value = appData.budgetMonth * periodSelect.value;


    
    },

    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus1);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            expensesPlus1.style.display = 'none';
        }
    },

    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, expensesPlus0);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            expensesPlus0.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
        let itemExpenses = item.querySelector('.expenses-title1').value;   
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== '') {
            appData.expenses[itemExpenses] = cashExpenses;
        }
        //console.log(item);
        });
    },
    getIncome: function() {
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title1').value;   
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
            });
    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '' ) {
                appData.addExpenses.push(item);
            }
            });
    },
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });

    },
    getExpensesMonth: function() {
        
        for (let prop in appData.expenses) {
            appData.expensesMonth +=  +appData.expenses[prop];
        }
    },
    getBudget: function() {  
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth/30;

    },  
    getTargetMonth: function() {
        return targetAmount.value/appData.budgetMonth;
    },
    getStatusIncome: function(){
        if (appData.budgetDay >= 1200) {
            console.log('У вас высокий уровень дохода');
            } else if (appData.budgetDay>=600 && appData.budgetDay<1200) {
            console.log('У вас средний уровень дохода');
            } else if (appData.budgetDay>=0 && appData.budgetDay<600) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
            } else {
            console.log('Что-то пошло не так');
            }
            },
            getInfoDeposit: function () {
                if(appData.deposit) {
                    do {
                        appData.percentDeposit = prompt('Какой годовой процент?');
                    } while (!isNumber(appData.percentDeposit));
                   
                    do {
                        appData.moneyDeposit = prompt('Какая сумма заложена?');
                    } while (!isNumber(appData.moneyDeposit));  
                }
            },
            calcPeriod: function() {
                return appData.budgetMonth*periodSelect.value;
            }
};

salaryAmount.addEventListener("input", buttonBlocked);

function buttonBlocked() {
    if (salaryAmount.value === '') {
        startButton.disabled = true;
    } else { startButton.disabled = false; 
    }
  }
  buttonBlocked();

startButton.addEventListener('click', appData.start);

expensesPlus1.addEventListener('click', appData.addExpensesBlock);
expensesPlus0.addEventListener('click', appData.addIncomeBlock);

appData.getInfoDeposit();
let str = "";
for (let word of appData.addExpenses) {
    word = (word.charAt(0).toUpperCase() + word.substring(1));
    str = str+word+", ";
}

let range = document.getElementsByClassName("title period-amount")[0];

periodSelect.onchange = function() {
    range.textContent = periodSelect.value;
};
 