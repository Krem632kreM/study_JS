'use strict'

const book = document.querySelectorAll('.book');
const books = document.querySelectorAll('.books');

books[0].prepend(book[1]); 
books[0].append(book[2]); 
book[3].before(book[4]);


document.getElementsByTagName('a')[2].innerHTML = "Книга 3. this и Прототипы Объектов";

const advertising = document.querySelector('.adv');
advertising.remove();

const book1 = document.querySelectorAll('.book')[1];


book1.getElementsByTagName('li')[0].after(book1.getElementsByTagName('li')[1]);
book1.getElementsByTagName('li')[1].after(book1.getElementsByTagName('li')[3]);
book1.getElementsByTagName('li')[3].after(book1.getElementsByTagName('li')[6]);
book1.getElementsByTagName('li')[4].after(book1.getElementsByTagName('li')[8]);
book1.getElementsByTagName('li')[9].after(book1.getElementsByTagName('li')[3]);

const book4 = document.querySelectorAll('.book')[4];

book4.getElementsByTagName('li')[1].after(book4.getElementsByTagName('li')[9]);
book4.getElementsByTagName('li')[9].after(book4.getElementsByTagName('li')[3]);
book4.getElementsByTagName('li')[3].after(book4.getElementsByTagName('li')[4]);
book4.getElementsByTagName('li')[4].after(book4.getElementsByTagName('li')[9]);
book4.getElementsByTagName('li')[9].after(book4.getElementsByTagName('li')[6]);
book4.getElementsByTagName('li')[6].after(book4.getElementsByTagName('li')[7]);
book4.getElementsByTagName('li')[7].after(book4.getElementsByTagName('li')[9]);

const book5 = document.querySelectorAll('.book')[5];
const liClone = book5.getElementsByTagName('li')[7].cloneNode();

book5.querySelectorAll('li')[8].after(liClone);
book5.querySelectorAll('li')[9].textContent = 'Глава 8: За пределами ES6';


