const money = 50000; 

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