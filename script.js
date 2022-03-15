const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать? \n пример: "Простые, Сложные, Интерактивные"');
const screenPrice = +prompt('колько будет стоить данная работа? \n пример: 12000');
const adaptive = prompt('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен? \n Например: service1, service2');
const servicePrice1 = +prompt('Сколько это будет стоить? \n Например: 5000');
const service2 = prompt('Какой дополнительный тип услуги нужен? \n Например: service1, service2');
const servicePrice2 = +prompt('Сколько это будет стоить? \n Например: 3500');
const rollBack = .9;


console.log(title);
console.log(screens);
console.log(screenPrice);

if (adaptive == "да") {
    console.log(Boolean(1));
} else if (adaptive == "нет") {
    console.log(Boolean(""));
}

console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice * rollBack);
console.log(servicePercentPrice);

if (fullPrice > 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
}