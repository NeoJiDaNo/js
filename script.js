'use strict';

let book = document.querySelectorAll('.book')
let background = document.querySelector('body')
let book3 = document.querySelectorAll('.book > h2')
let adv = document.querySelector('.adv')
let glav = document.querySelectorAll('.book > ul')
let glav2 = glav[1].querySelectorAll('li')
let glav5 = glav[4].querySelectorAll('li')
let li = document.createElement('li')
let glav6 = glav[5].querySelectorAll('li')



const start = function() {
    background.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)' 
    book3[2].textContent = "Книга 3. this и Прототипы Объектов"
    book3[2].style.color = 'darkkhaki'
    adv.style.display = 'none'
}

const books = function() {
    book[1].after(book[0])
    book[4].after(book[3])
    book[4].after(book[2])
    book[3].after(book[2])
    book[2].before(book[5])
}

const book2 = function() {
    glav2[8].after(glav2[2])
    glav2[6].after(glav2[4])
    glav2[6].after(glav2[5])
    glav2[5].before(glav2[8])
    glav2[5].before(glav2[4])
    glav2[6].after(glav2[4])
    glav2[2].before(glav2[9])
}

const book5 = function() {
    glav5[2].before(glav5[9])
    glav5[2].before(glav5[3])
    glav5[2].before(glav5[4])
    glav5[5].before(glav5[6])
    glav5[5].before(glav5[7])
}

const book6 = function() {
    i.textContent = 'Глава 8: За пределами ES6';
    lav[5].append(li)
    lav6[10].after(glav6[9])
}

start()
books()
book2()
book5()
book6()
// https://codepen.io/neojidano/pen/PoEjmxv