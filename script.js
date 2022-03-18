const text = prompt('Текст', 'Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице')

function textOk(a) {
    if(typeof a !== 'string'){
        console.log('не строчка');
    } else if(typeof a === 'string' && a.length > 30) {
        console.log('строчка больше 30');
        a = text.trim()
        console.log(a);
        a = text.slice(0, 30) + '...';
        console.log(a);
    } 
    else if(typeof a === 'string') {
        console.log('строчка');
        a = text.trim()
        console.log(a);
    }
}

textOk(text)