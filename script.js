'use strict'

let money = 50000; 

let income = '50000';

let addExpenses = 'иНтернет, такси, коммуналка';

let deposit = true;

let mission = 500000;

let period = 6;


//console.log(typeof money);
//console.log(typeof income);
//console.log(typeof deposit);
//console.log(addExpenses.length);
//console.log("За",period, "месяцев цель заработать", mission, "рублей");
//console.log(addExpenses.toLowerCase().split(','));

/*let budgetDay = money/30;

console.log(budgetDay);

  Вывести в консоль длину строки addExpenses
   - Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
   - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
   - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
   - Вывести в консоль budgetDay */

   money = prompt('Ваш месячный доход?');
   addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
   deposit = confirm('Есть ли у вас депозит в банке?');
   
   /*5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
“Введите обязательную статью расходов?” (например expenses1, expenses2)
“Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных*/

   let expenses1 = prompt('Введите обязательную статью расходов?');
   let amount1 = prompt('Во сколько это обойдется?');
   let expenses2 = prompt('Введите обязательную статью расходов?');
   let amount2 = prompt('Во сколько это обойдется?');

   /*
   console.log("Цель",mission, "будет достигнута за", Math.ceil(mission/budgetMonth), "месяцев");
   budgetDay = budgetMonth/30;
   console.log(Math.floor(budgetDay));
9) Написать конструкцию условий (расчеты приведены в рублях)	
Если budgetDay больше 1200, то “У вас высокий уровень дохода”
Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже 
среднего”
Если отрицательное значение то вывести “Что то пошло не так”
Учесть варианты 0, 600 и 1200 (к какому уровню не важно)

if (budgetDay >= 1200) console.log('У вас высокий уровень дохода');
else if (budgetDay>=600&& budgetDay<1200)  console.log('У вас средний уровень дохода');
else if (budgetDay>=0&& budgetDay<600) console.log('К сожалению у вас уровень дохода ниже среднего');
else console.log('Что то пошло не так');*/

//LESSON04
/*1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц*/

let showTypeOf = function(data){
   console.log(data, typeof(data));
}

showTypeOf(money);

function getExpensesMonth (a,b){
   return Number(a)+ Number(b);
}

console.log(getExpensesMonth(amount1,amount2));

50000
console.log(addExpenses.toLowerCase().split(','));

/*2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)*/
function getAccumulatedMonth (a,b,c){
   return Number(a)-getExpensesMonth(b,c);
}

//console.log(getAccumulatedMonth());

/*3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth*/
let accumulatedMonth  = getAccumulatedMonth(money, amount1, amount2);

/*4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, 
зная результат месячного накопления (accumulatedMonth) и возвращает результат*/
function getTargetMonth (a){
   return Math.ceil(mission/a);
}

console.log(getTargetMonth(accumulatedMonth));

/*5) Удалить из кода переменную budgetMonth
6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)*/
let budgetDay = accumulatedMonth/30;
console.log(budgetDay);

//- вызовы функции showTypeOf
//- вызов функции getStatusIncome

let getStatusIncom = function(){
   if (budgetDay >= 1200) return ('У вас высокий уровень дохода');
   else if (budgetDay>=600&& budgetDay<1200)  return ('У вас средний уровень дохода');
   else if (budgetDay>=0&& budgetDay<600) return ('К сожалению у вас уровень дохода ниже среднего');
   else return('Что то пошло не так');
}

console.log(getStatusIncom());