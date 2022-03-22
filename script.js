let num = Math.floor(Math.random() * 100);
alert('Угадай число от 1 до 100');
console.log(num);


function one(x) {
    let y = prompt('Напиши твоё число от 1 до 100', 50)
    function filter() {
        if (false == isNaN(y)) {
            num = Number(y)
        } else {
            alert('Это не число! Попробуйте снова')
            one(x)
        }
    }
    function two() {
        if (y == x) {
            alert('Поздравляю! Ты угадал')
        } else if (y == null){
            alert('Игра окончена')
        } else if (y > x) {
            alert('Загаданное число меньше!')
            one(x)
        } else if (y < x) {
            alert('Загаданное число больше!')
            one(x)
        }
    }
    filter()
    two()
}
one(num)