'use strict';
const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
const screenPrice = +prompt('колько будет стоить данная работа?', 12000);
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1, service2');
const servicePrice1 = +prompt('Сколько это будет стоить?', 5000);
const service2 = prompt('Какой дополнительный тип услуги нужен?', 'service1, service2');
const servicePrice2 = +prompt('Сколько это будет стоить?', 3500);
const rollBack = .9;


console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);

const showTypeOf = function (variable){
    console.log(variable, typeof variable);
}

const getAllServicePrices = function (a, b) {
    return a + b
}
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2)

console.log();

function getFullPrice(a, b) {
    return a + b
}

console.log(getFullPrice(screenPrice, allServicePrices));

const fullPrice = getFullPrice(screenPrice, allServicePrices);

console.log(fullPrice);

const getTitle = function(title) {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
}

console.log(getTitle(title));

const getServicePercentPrices = function(a, b) {
    return a * b
}

console.log(getServicePercentPrices(fullPrice, rollBack));

const servicePercentPrices = getServicePercentPrices(fullPrice, rollBack)

console.log(servicePercentPrices);

console.log(screens.split());

console.clear();

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(screens);

if (fullPrice > 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
}
