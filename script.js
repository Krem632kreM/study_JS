'use strict'
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;

let start = function() {

    do {
        money = +prompt('Ваш месячный доход?', 50000);
    } while (!isNumber(money));
};

start();

let appData = {
    income: {},
    addIncome: {},
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0, 
    mission: 500000,
    period: 6,
    asking: function() {

        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome;
            let cashIncome;
            
                do {
                    itemIncome = prompt('Какой у вас есть дополнительный заработок?');
                } while (!isNaN(itemIncome));

                do {
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
                } while (!isNumber(cashIncome));
            
                appData.income[itemIncome] = cashIncome;

        }

        
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'инт,комм,проезд');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        addExpenses.toLowerCase().split(',');
        
        for (let i=0; i<2;i++) {
            let value;
            let property;

            do {
            property = prompt('Введите обязательную статью расходов?');
            } while (!isNaN(property));

                do {
                    value = prompt('Во сколько это обойдется?');
                } while (!isNumber(value));

                appData.expenses[property] = value;
        }
    },
    budget: money,
    budgetDay: null,
    budgetMonth: null,
    expensesMonth: null,  
    getExpensesMonth: function() {
        
        for (let prop in appData.expenses) {
            appData.expensesMonth +=  +appData.expenses[prop];
        }
    },

    getBudget: function() {  
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth/30;

    },
    
    getTargetMonth: function() {
        return Math.ceil(appData.mission/appData.expensesMonth) < 0 ? 
        'Цель не будет достигнута' : 'Цель будет достигнута за ' + Math.ceil(appData.mission/appData.budgetMonth) + ' месяцев';
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
                    //let val;

                    do {
                        appData.percentDeposit = prompt('Какой годовой процент?');
                    } while (!isNumber(appData.percentDeposit));
                   // appData.percentDeposit = val;

                    do {
                        appData.moneyDeposit = prompt('Какая сумма заложена?');
                    } while (!isNumber(appData.moneyDeposit));

                    
                }
            },

            calcSavedMoney: function() {
                return appData.budgetMonth*appData.period;
            }

};

appData.asking();
appData.getExpensesMonth();
console.log('Расходы за месяц ' + appData.expensesMonth);
appData.getBudget();
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
appData.getInfoDeposit();

console.log ("Наша программа включает в себя данные: ");
for (let prop in appData) {
    console.log ("Свойство: " + prop + " Значение: " + appData[prop] );
}

let str = "";

for (let word of appData.addExpenses) {
    word = (word.charAt(0).toUpperCase() + word.substr(1));
    str = str+word+", ";
}

console.log(str.trim().replace(/,\s*$/, ""));


