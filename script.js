'use strict';

let startButton = document.getElementById('start');
let cancelButton = document.getElementById('cancel');
let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];
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

const AppData = function () {
    this.budget =  0;
    this.budgetDay =  null;
    this.budgetMonth =  null;
    this.expensesMonth =  null;  
    this.income =  {};
    this.incomeMonth =  0;
    this.addIncome =  [];
    this.expenses =  {};
    this.addExpenses =  [];
    this.deposit =  false;
    this.percentDeposit =  0;
    this.moneyDeposit =  0; 
    };

    

    AppData.prototype.start = function() {
            this.budget = +salaryAmount.value;
            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudget();
            this.BlockedLeftInput();
            this.showResult();
    };


    AppData.prototype.reset = function() {
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
        document.getElementsByClassName("title period-amount")[0].textContent = periodSelect.value;
        additionalIncomeItem[1].value ='';
        additionalIncomeItem[0].value ='';

        
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
    };

    AppData.prototype.showResult = function() {
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
        
            let str = "";
            for (let word of this.addExpenses) {
                word = (word.charAt(0).toUpperCase() + word.substring(1));
                str = str+word+", ";
            }
    };

    AppData.prototype.addExpensesBlock = function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    };

    AppData.prototype.addIncomeBlock = function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        

        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    };

    AppData.prototype.getExpenses = function() {
        const _this = this;
        expensesItems.forEach(function(item) {
        let itemExpenses = item.querySelector('.expenses-title1').value;   
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = cashExpenses;
        }
        });
    };

    AppData.prototype.getIncome = function() {
        const _this = this;
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title1').value;   
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                _this.income[itemIncome] = cashIncome;
            }
            });
    };

    AppData.prototype.getAddExpenses = function() {
        const _this = this;
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '' ) {
                _this.addExpenses.push(item);
            }
            });
    };

    AppData.prototype.getAddIncome = function() {
        const _this = this;
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== '') {
                _this.addIncome.push(itemValue);
            }
        });
    };

    AppData.prototype.getExpensesMonth = function() {
        
        for (let prop in this.expenses) {
            this.expensesMonth +=  +this.expenses[prop];
        }
    };

    AppData.prototype.getBudget = function() {  
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth/30;

    };

    AppData.prototype.getTargetMonth = function() {
        return targetAmount.value/this.budgetMonth;
    };

    AppData.prototype.getStatusIncome = function(){
        if (this.budgetDay >= 1200) {
            console.log('У вас высокий уровень дохода');
            } else if (this.budgetDay>=600 && this.budgetDay<1200) {
            console.log('У вас средний уровень дохода');
            } else if (this.budgetDay>=0 && this.budgetDay<600) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
            } else {
            console.log('Что-то пошло не так');
            }
    };
    AppData.prototype.getInfoDeposit = function () {
        if(this.deposit) {
            do {
                this.percentDeposit = prompt('Какой годовой процент?');
            } while (!isNumber(this.percentDeposit));
            do {
                this.moneyDeposit = prompt('Какая сумма заложена?');
            } while (!isNumber(this.moneyDeposit));  
        }
    };
    AppData.prototype.calcPeriod = function() {
        return this.budgetMonth*periodSelect.value;
    };
    AppData.prototype.BlockedLeftInput = function () {
        budgetMonthValue.disabled = true;
        budgetDayValue.disabled = true;
        expensesMonthValue.disabled = true;
        additionalIncomeValue.disabled = true;
        additionalExpensesValue.disabled = true;
        incomePeriodValue.disabled = true;
        targetMonthValue.disabled = true;     
    };
    AppData.prototype.eventsListeners = function () {

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

cancelButton.addEventListener('click', appData.reset.bind(appData));

expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));

incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));

let range = document.getElementsByClassName("title period-amount")[0];

periodSelect.onchange = function() {
    range.textContent = periodSelect.value;
}; 



        
        
    };

    const appData = new AppData();
    console.log(appData);
    appData.eventsListeners();











