'use strict'

let money = 50000; 

let income = '50000';

let addExpenses = 'иНтернет, такси, коммуналка';

let deposit = true;

let mission = 500000;

let period = 6;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("За",period, "месяцев цель заработать", mission, "рублей");
console.log(addExpenses.toLowerCase().split(','));

let budgetDay = money/30;

console.log(budgetDay);

/*  Вывести в консоль длину строки addExpenses
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

   let budgetMonth = money - amount1 - amount2;
   console.log(budgetMonth);

   /*7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, 
   округляя в большую сторону (методы объекта Math в помощь)*/

   console.log("Цель",mission, "будет достигнута за", Math.ceil(mission/budgetMonth), "месяцев");
   /*8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль 
   округлив в меньшую сторону */
   budgetDay = budgetMonth/30;
   console.log(budgetDay);

   /*9) Написать конструкцию условий (расчеты приведены в рублях)	
Если budgetDay больше 1200, то “У вас высокий уровень дохода”
Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже 
среднего”
Если отрицательное значение то вывести “Что то пошло не так”
Учесть варианты 0, 600 и 1200 (к какому уровню не важно)*/

if (budgetDay >= 1200) {
   console.log('У вас высокий уровень дохода');
   } else if (budgetDay>=600&& budgetDay<1200) {
   console.log('У вас средний уровень дохода');
   } else if (budgetDay>=0&& budgetDay<600) {
   console.log('К сожалению у вас уровень дохода ниже среднего');
   } else {
   console.log('Что-то пошло не так');
   }




