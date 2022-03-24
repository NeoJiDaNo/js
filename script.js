'use strict'

const appData = {
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service1: '',
    service2: '',

    start: function(){
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices)
        appData.servicePercentPrice  = appData.getServicePercentPrices()
        appData.title = appData.getTitle() 
        appData.logger()
    },

    asking: function () {
    appData.title = prompt("Как называется ваш проект?");
    appData.screens = prompt("Какие типы экранов нужно разработать?");

    do{
        appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    }while(!appData.isNumber(appData.screenPrice))

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    getRollbackMessage: function(price){
        if (price >= 30000) {
            return "Даем скидку в 10%"
        }else if(price >= 15000 && price< 30000) {
            return"Даем скидку в 5%"
        }else if (price >= 0 && price < 15000) {
            return"Скидка не предусмотрена"
        }else{
            return"Что-то пошло не так"
        }
    },

    getAllServicePrices: function (serv1, serv2){
        let sum = 0
        let boba = 0;
        
        for (let i = 0; i < 2; i++){
            if (i === 0){
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1){
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
            do {
                boba = +prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(boba))
    
            sum += boba;
        }
        return sum
    },
    
    getFullPrice: function(scr, allServ){
        return scr + allServ;
    },

    getServicePercentPrices: function(){
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)) ;
    },

    getTitle: function() {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },

    logger: function(){
        for (const key in appData) {
            console.log(appData[key]);
        }
        
        
    },
}


appData.start()