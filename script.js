'use strict';

let book = document.querySelectorAll('.book')
console.dir(book);

book[1].after(book[0])
book[4].after(book[3])
book[4].after(book[2])
book[3].after(book[2])
book[2].before(book[5])


let background = document.querySelector('body')
background.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)' 


let book3 = document.querySelectorAll('.book > h2')

book3[2].textContent = "Книга 3. this и Прототипы Объектов"
book3[2].style.color = 'darkkhaki'


let adv = document.querySelector('.adv')
adv.style.display = 'none'


let glav = document.querySelectorAll('.book > ul')
console.dir(glav)

let glav2 = glav[1].querySelectorAll('li')
console.log(glav2);

glav2[8].after(glav2[2])
glav2[6].after(glav2[4])
glav2[6].after(glav2[5])
glav2[5].before(glav2[8])
glav2[5].before(glav2[4])
glav2[6].after(glav2[4])
glav2[2].before(glav2[9])

let glav5 = glav[4].querySelectorAll('li')
console.log(glav5);

glav5[2].before(glav5[9])
glav5[2].before(glav5[3])
glav5[2].before(glav5[4])
glav5[5].before(glav5[6])
glav5[5].before(glav5[7])


// “Глава 8: За пределами ES6”
let li = document.createElement('li')
li.textContent = 'Глава 8: За пределами ES6';
glav[5].appendChild(li)
let glav6 = glav[5].querySelectorAll('li')
console.log(glav6);
glav6[10].after(glav6[9])

// https://codepen.io/neojidano/pen/PoEjmxv