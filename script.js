let lang = prompt('Язык?');

if (lang == "ru") {
    console.log("Пн");
    console.log("Вт");
    console.log("Ср");
    console.log("Чт");
    console.log("Пт");
    console.log("Сб");
    console.log("Вс");
} else if (lang == "en") {
    console.log("Mn");
    console.log("Td");
    console.log("Wd");
    console.log("Th");
    console.log("Fr");
    console.log("Sr");
    console.log("Sn");
}

console.log("   ");

switch (lang) {
    case "ru":
        console.log("Пн");
        console.log("Вт");
        console.log("Ср");
        console.log("Чт");
        console.log("Пт");
        console.log("Сб");
        console.log("Вс");
        break
    case "en":
        console.log("Mn");
        console.log("Td");
        console.log("Wd");
        console.log("Th");
        console.log("Fr");
        console.log("Sr");
        console.log("Sn");
        break
}

console.log("   ");

let langs = [];
langs['ru'] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
langs['en'] = ["Mn", "Td", "Wd", "Th", "Fr", "Sr", "Sn"];
console.log(langs[lang]);

console.log("   ");

const namePerson = prompt("Имя \n Артём - Директор \n Александр - преподователь \n отстальные - студенты")
let pers = namePerson == "Артём" ? "Директор" : (namePerson == "Александр" ? "Преподователь" : "Студент")
console.log(pers);