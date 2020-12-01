/*let week = ["Понедельник", 'Вторник', "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];

 for (let i=0; i<week.length; i++) {
    console.log(week[i]);
    if (i === 6 || i === 7) ? 'strong' : 'span';
 };*/

 'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const todayDay = new Date();

const days = () => {
    week.forEach((item, i) => {
        /*if (i === +todayDay.getDay()-1) { // Если текущий день недели то от номера текущей даты отнимаем единицу, 
            //так как массив у нас начинается с нуля
            document.write(String(todayDay.getDay()).bold());
    
        }*/
        if (item === 'Суббота' || item === 'Воскресенье') { // Если выходные то
            document.write(week[i].italics()+ "<pre><\/pre>");
            } else if (i === +todayDay.getDay()-1) {
                document.write(week[i].bold()+ "<pre><\/pre>");
                
            } else {
            document.write(week[i] + "<pre><\/pre>");
            }
    });
};
days(); // Вызываем функцию;
