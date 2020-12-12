'use strict';

let startButton = document.getElementById('start');
let cancelButton = document.getElementById('cancel');
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
let expensesAmount = document.querySelector(".expenses-amount");
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
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.BlockedLeftInput();
        this.showResult();
    },

    reset: function() {
        this.budget = 0,
        this.budgetDay =null,
        this.budgetMonth = null,
        this.expensesMonth=null,  
        this.income = {},
        this.incomeMonth = 0,
        this.addIncome = [],
        this.expenses = {},
        this.addExpenses = [],
        this.deposit = false,
        this.percentDeposit = 0,
        this.moneyDeposit = 0;

        salaryAmount.value = "";
        incomeAmount.value = "";
        incomeTitle1.value = "";
        expensesTitle1.value = '';
        expensesAmount.value= '';
        additionalExpensesItem.value = "";
        targetAmount.value = "";
        periodSelect.value = '1';
        range.textContent = periodSelect.value;

        
        for (let i = 0; i<incomeItems.length; i++) {
            incomeItems[i].querySelector(".income-title1").value = '';
            incomeItems[i].querySelector(".income-amount").value = '';
        }
        incomeItems = [];


        for (let i = 0; i<expensesItems.length; i++) {
            expensesItems[i].querySelector(".expenses-title1").value = '';
            expensesItems[i].querySelector(".expenses-amount").value = '';
        }
        expensesItems = [];

        budgetMonthValue.value = '';
        budgetDayValue.value = '';
        expensesMonthValue.value = '';
        additionalIncomeValue.value = '';
        additionalExpensesValue.value = '';
        incomePeriodValue.value = '';
        targetMonthValue.value = '';

        

    },

    showResult: function() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.floor(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(", ");
        additionalIncomeValue.value = this.addIncome.join(", ");
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();

        periodSelect.oninput = function() {
        incomePeriodValue.value = this.budgetMonth * periodSelect.value; 
        };
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
        
        for (let prop in this.expenses) {
            this.expensesMonth +=  +this.expenses[prop];
        }
    },
    getBudget: function() {  
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth/30;

    },  
    getTargetMonth: function() {
        return targetAmount.value/this.budgetMonth;
    },
    getStatusIncome: function(){
        if (this.budgetDay >= 1200) {
            console.log('У вас высокий уровень дохода');
            } else if (this.budgetDay>=600 && this.budgetDay<1200) {
            console.log('У вас средний уровень дохода');
            } else if (this.budgetDay>=0 && this.budgetDay<600) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
            } else {
            console.log('Что-то пошло не так');
            }
            },
            getInfoDeposit: function () {
                if(this.deposit) {
                    do {
                        this.percentDeposit = prompt('Какой годовой процент?');
                    } while (!isNumber(this.percentDeposit));
                
                    do {
                        this.moneyDeposit = prompt('Какая сумма заложена?');
                    } while (!isNumber(this.moneyDeposit));  
                }
            },
            calcPeriod: function() {
                return this.budgetMonth*periodSelect.value;
            },

            BlockedLeftInput: function () {
                budgetMonthValue.disabled = true;
                budgetDayValue.disabled = true;
                expensesMonthValue.disabled = true;
                additionalIncomeValue.disabled = true;
                additionalExpensesValue.disabled = true;
                incomePeriodValue.disabled = true;
                targetMonthValue.disabled = true;     
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

startButton.addEventListener('click', function() {
    this.start();
    cancelButton.style.display = 'block';
    startButton.replaceWith(cancelButton);
}.bind(appData));

cancelButton.addEventListener('click', function() {
    this.reset();
}.bind(appData));

expensesPlus1.addEventListener('click', function() {
    this.addExpensesBlock();
}.bind(appData));

expensesPlus0.addEventListener('click', function() {
    this.addIncomeBlock();
}.bind(appData));

let bound = function returnFunc() {
    return this.getInfoDeposit();
}.bind(appData);
bound();


let pound = function returnFunc() {
    let str = "";
    for (let word of this.addExpenses) {
        word = (word.charAt(0).toUpperCase() + word.substring(1));
        str = str+word+", ";
    }
}.bind(appData);
pound();

let range = document.getElementsByClassName("title period-amount")[0];

periodSelect.onchange = function() {
    range.textContent = periodSelect.value;
};





