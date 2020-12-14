'use strict';

    const isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    };

const startButton = document.getElementById('start');
const cancelButton = document.getElementById('cancel');
const incomePlus = document.getElementsByTagName('button')[0];
const expensesPlus = document.getElementsByTagName('button')[1];
const idCheckbox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.getElementsByClassName("result-total budget_month-value")[0];
const budgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0];
const additionalIncomeValue  = document.getElementsByClassName('result-total additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('result-total income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('result-total target_month-value')[0];
const salaryAmount = document.querySelector(".salary-amount");
const incomeTitle1 = document.querySelector(".income-title1");
const incomeAmount = document.querySelector(".income-amount");
const expensesTitle1 = document.querySelector(".expenses-title1");
const expensesAmount = document.querySelector(".expenses-amount");
let expensesItems = document.querySelectorAll(".expenses-items");
const additionalExpensesItem = document.querySelector(".additional_expenses-item");
const targetAmount = document.querySelector(".target-amount");
const periodSelect = document.querySelector(".period-select");
let incomeItems = document.querySelectorAll(".income-items");

   

    class AppData {
        constructor() {
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
    }

    start(){
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.BlockedLeftInput();
        this.showResult();
    }

    reset() {
            this.budget = 0;
            this.budgetDay =null;
            this.budgetMonth = null;
            this.expensesMonth=null;  
            this.income = {};
            this.incomeMonth = 0;
            this.addIncome = [];
            this.expenses = {};
            this.addExpenses = [];
            this.deposit = false;
            this.percentDeposit = 0;
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
        }

    showResult() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.floor(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(", ");
        additionalIncomeValue.value = this.addIncome.join(", ");
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();

        periodSelect.oninput = () => {
        incomePeriodValue.value = this.budgetMonth * periodSelect.value; 
        };
        
            let str = "";
            for (let word of this.addExpenses) {
                word = (word.charAt(0).toUpperCase() + word.substring(1));
                str = str+word+", ";
            }
    }

    addExpensesBlock() {
        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    }

    addIncomeBlock() {
        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    }

    getExpenses() {
        const _this = this;
        expensesItems.forEach(function(item) {
        const itemExpenses = item.querySelector('.expenses-title1').value;   
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = cashExpenses;
        }
        });
    }

    getIncome() {
            const _this = this;
            incomeItems.forEach(function(item) {
                const itemIncome = item.querySelector('.income-title1').value;   
                const cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== '') {
                    _this.income[itemIncome] = cashIncome;
                }
                });
    }

    getAddExpenses() {
            const _this = this;
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item) {
                item = item.trim();
                if (item !== '' ) {
                    _this.addExpenses.push(item);
                }
                });
    }

    getAddIncome() {
            const _this = this;
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if(itemValue !== '') {
                    _this.addIncome.push(itemValue);
                }
            });
    }

    getExpensesMonth() {   
            for (let prop in this.expenses) {
                this.expensesMonth +=  +this.expenses[prop];
            }
    }

    getBudget() {  
            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
            this.budgetDay = this.budgetMonth/30;
    }

    getTargetMonth() {
            return targetAmount.value/this.budgetMonth;
    }

    getStatusIncome(){
            if (this.budgetDay >= 1200) {
                console.log('У вас высокий уровень дохода');
                } else if (this.budgetDay>=600 && this.budgetDay<1200) {
                console.log('У вас средний уровень дохода');
                } else if (this.budgetDay>=0 && this.budgetDay<600) {
                console.log('К сожалению у вас уровень дохода ниже среднего');
                } else {
                console.log('Что-то пошло не так');
                }
    }

    getInfoDeposit () {
            if(this.deposit) {
                do {
                    this.percentDeposit = prompt('Какой годовой процент?');
                } while (!isNumber(this.percentDeposit));
                do {
                    this.moneyDeposit = prompt('Какая сумма заложена?');
                } while (!isNumber(this.moneyDeposit));  
            }
    }

    calcPeriod() {
            return this.budgetMonth*periodSelect.value;
    }

    BlockedLeftInput() {
            budgetMonthValue.disabled = true;
            budgetDayValue.disabled = true;
            expensesMonthValue.disabled = true;
            additionalIncomeValue.disabled = true;
            additionalExpensesValue.disabled = true;
            incomePeriodValue.disabled = true;
            targetMonthValue.disabled = true;     
    }

    eventsListeners() {
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
        }.bind(this));

        cancelButton.addEventListener('click', this.reset.bind(this));

        expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));

        incomePlus.addEventListener('click', this.addIncomeBlock.bind(this));

        const range = document.getElementsByClassName("title period-amount")[0];

        periodSelect.onchange = () => {
            range.textContent = periodSelect.value;
}; 
}
}

    const appData = new AppData();
    console.log(appData);
    appData.eventsListeners();
