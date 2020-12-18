
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function counterTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

       function getTimerRemaining () {
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining,
        seconds,
        minutes,
        hours;

        if ((dateStop - dateNow)<=0) {
            timeRemaining = 0;
            seconds = ('0' + 0);
            minutes = ('0' + 0);
            hours = ('0' + 0);
        } else {
            timeRemaining =(dateStop - dateNow) /1000;
            
            let s = Math.floor(timeRemaining % 60),
            m = Math.floor((timeRemaining / 60)%60),
            h = Math.floor(timeRemaining / 60 / 60 );

            seconds = (s > 9 && s <= 60) ? s : ('0' + s);
            minutes = (m > 9 && m <= 60) ? m : ('0' + m);
            hours = (h > 9 && h <= 60) ? h : ('0' + h);

        }

        timerHours.textContent = hours;
        timerMinutes.textContent = minutes;
        timerSeconds.textContent = seconds;
            
    }
    getTimerRemaining();

}
//counterTimer('18 december 2020');

setInterval(counterTimer, 1000, '19 december 2020');
});


