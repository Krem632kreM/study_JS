let lang = prompt("Введите значение lang");

 if (lang === 'ru') {
    console.log ("понедельник вторник среда четверг пятница суббота воскресение");
    } else if (lang === 'en') {
    console.log ("Monday Tuesday Wednesday Thursday Friday Saturday Sunday");
    } else {
    console.log("lang может принимать 2 значения: \'ru\' \'en\'");
    }

    switch(lang)
    {
        case 'ru':
            console.log ("понедельник вторник среда четверг пятница суббота воскресение");
            break;
        case 'en':
            console.log ("Monday Tuesday Wednesday Thursday Friday Saturday Sunday");
            break;
        default:
            console.log("lang может принимать 2 значения: \'ru\' \'en\'");
    }

      
    var arr = {
        'ru':['понедельник', 'вторник', 'среда','четверг', 'пятница', 'суббота', 'воскресение'],
        'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    };
    
    console.log(arr[lang]);
      
let namePerson = prompt("Введите имя");
let result;

result = (namePerson === 'Артем') ? 'директор' : 'студент';
result = (namePerson === 'Максим') ? 'преподаватель' : 'студент';
 
console.log(result);