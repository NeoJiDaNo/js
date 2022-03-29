'use strict';

let now = new Date()

let options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",

    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}

console.log(now.toLocaleString("ru", options));

let date = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}

console.log(now.toLocaleString('ru', date));

console.log(now);