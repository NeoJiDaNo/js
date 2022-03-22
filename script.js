alert('Угадай число от 1 до 100');
let num;
let chel;


function three(x) {
    x = Math.floor(Math.random() * 100);
    let live = 10;
    function one() {
        let y = prompt('Напиши твоё число от 1 до 100', 50)
        function filter() {
            if (live > 0) {
                if (false == isNaN(y)) {
                    num = Number(y)
                    live--
                    console.log(live);
                } else {
                    alert('Это не число! Попробуйте снова')
                    one()
                }
            } else if (live === 0) {
                let q = confirm('Ты умер!Играть будешь?')
                if (false == q) {
                    alert('Игра окончена!')
    
                } else if (true == q) {
                    one()
                }
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
    one()
}
three(num)