

const appData = {
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},

    start: function(){
        appData.asking()
        appData.addPrice()
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices)
        appData.getServicePercentPrices()
        appData.getTitle() 

        appData.logger()
    },


    asking: function () {
        do{
            appData.title = prompt("Как называется ваш проект?");
        }while(isNaN(appData.title) === false)

    for (let i = 0; i < 2; i++){
        let name = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
        let price = 0

        do{
            price = prompt("Сколько будет стоить данная работа?");
        }while(!appData.isNumber(price))

        appData.screens.push({id: i, name:name, price: price})
    }



    for (let i = 0; i < 2; i++){
        let name = prompt("Какой дополнительный тип услуги нужен?");
        let price = 0;

        do {
            price = +prompt("Сколько это будет стоить?");
        } while (!appData.isNumber(price))

        appData.services[i] = [name, +price]
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrice: function () {
        for ( let screen of appData.screens){
            appData.screenPrice += +screen.price
        }
        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    isString: function isString(str) {
        return (typeof str === "string" || str instanceof String);
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
    
    getFullPrice: function(scr, allServ){
        appData.fullPrice = scr + allServ;
    },

    getServicePercentPrices: function(){
        appData.servicePercentPrice  = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)) ;
    },

    getTitle: function() {
        appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },

    logger: function(){
        for (const key in appData) {
            console.log(appData[key]);
        }
        console.log(appData.screens);
        console.log(appData.services);
        
    },
}


appData.start()