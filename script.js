'use strict'

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let income = '50000';
let mission = 500000;
let period = 6;



let money;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');


let expenses = []; 



//LESSON05
//1) Переписать функцию start циклом do while
let start = function() {

    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));
};

start();

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);

/*2) Добавить проверку что введённые данные являются числом, 
которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth*/
let getExpensesMonth = function() {
    let sum = 0;
    let pr;

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');
        
        do {
        pr = prompt('Во сколько это обойдется?');
        } while (!isNumber(pr));

        sum += +pr;
    }
        
    
    console.log(sum);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

console.log( addExpenses.toLowerCase().split(',') );

function getAccumulatedMonth(money) {
    return Number(money)-expensesAmount;
};

let accumulatedMonth  = getAccumulatedMonth(money);

/*3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута”
необходимо выводить “Цель не будет достигнута”*/
function getTargetMonth(mission, accumulatedMonth) {
    return Math.ceil(mission/accumulatedMonth) < 0 ? 'Цель не будет достигнута' : 'Цель будет достигнута';
};

console.log( getTargetMonth(mission, accumulatedMonth) );

let budgetDay = accumulatedMonth/30;
console.log(budgetDay);


let getStatusIncom = function(){
if (budgetDay >= 1200) {
   console.log('У вас высокий уровень дохода');
   } else if (budgetDay>=600 && budgetDay<1200) {
   console.log('У вас средний уровень дохода');
   } else if (budgetDay>=0 && budgetDay<600) {
   console.log('К сожалению у вас уровень дохода ниже среднего');
   } else {
   console.log('Что-то пошло не так');
   }
};

console.log( getStatusIncom() );