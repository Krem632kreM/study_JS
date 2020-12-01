'use strict'
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;

let start = function() {

    do {
        money = +prompt('Ваш месячный доход?');
    } while (!isNumber(money));
};

start();

let appData = {
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 6,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        addExpenses.toLowerCase().split(',');
        
        for (let i=0; i<2;i++) {
            let value;
            let property;

            property = prompt('Введите обязательную статью расходов?');

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

    
    

};

appData.asking();
appData.getExpensesMonth();
console.log('Расходы за месяц ' + appData.expensesMonth);
appData.getBudget();
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

console.log ("Наша программа включает в себя данные: ");
for (let prop in appData) {
    console.log ("Свойство: " + prop + " Значение: " + appData[prop] );
}