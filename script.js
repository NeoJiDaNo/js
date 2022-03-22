'use strict'

let servicePrice1
let servicePrice2 

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let title
let screens
let screenPrice
let adaptive
let service1
let service2


const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект?");
    screens = prompt("Какие типы экранов нужно разработать?");

    do{
        screenPrice = prompt("Сколько будет стоить данная работа?");
    }while(!isNumber(screenPrice))

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const showTypeOf = function (variable){
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price){
    if (price >= 30000) {
        return "Даем скидку в 10%"
    }else if(price >= 15000 && price< 30000) {
        return"Даем скидку в 5%"
    }else if (price >= 0 && price < 15000) {
        return"Скидка не предусмотрена"
    }else{
        return"Что-то пошло не так"
    }
}

const getAllServicePrices = function (serv1, serv2){
    let sum = 0
    let boba = 0;
    
    for (let i = 0; i < 2; i++){
        if (i === 0){
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1){
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        do {
            biba = +prompt("Сколько это будет стоить?");
        } while (!isNumber(biba))

        sum += biba;
    }
    return sum
}

const getFullPrice = function(scr, allServ){
    return scr + allServ;
}

const getServicePercentPrices = function(fullP, rollb){
    return fullP - (fullP * (rollb / 100)) ;
}

const getTitle = function(title) {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
}

asking()
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice  = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getTitle(title));
console.log(allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(screens.split(", "));