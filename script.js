'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const todayDay = new Date();

const days = () => {
    week.forEach((item, i) => {

        if (item === 'Суббота' || item === 'Воскресенье') { 
            document.write(week[i].italics()+ "<pre><\/pre>");
            } else if (i === +todayDay.getDay()-1) {
                document.write(week[i].bold()+ "<pre><\/pre>");    
            } else {
            document.write(week[i] + "<pre><\/pre>");
            }
    });
};

days();
