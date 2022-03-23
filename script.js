alert('Угадай число от 1 до 100');
let num;
let userNum;


function startGame(x) {
    x = Math.floor(Math.random() * 100);
    let live = 10;
    function technicalPart(y) {
        y = prompt('Напиши твоё число от 1 до 100', 50)
        function filter() {
            if (live > 0) {
                if (false == isNaN(y)) {
                    num = Number(y)
                    live--
                    console.log(live);
                } else {
                    alert('Это не число! Попробуйте снова')
                    technicalPart(y)
                }
            } else if (live === 0) {
                let q = confirm('Ты умер!Играть будешь?')
                if (false == q) {
                    y = null
    
                } else if (true == q) {
                    startGame(x)
                }
            }
        }
        function gameOptions() {
            if (y == x) {
                alert('Поздравляю! Ты угадал')
            } else if (y == null){
                alert('Игра окончена')
            } else if (y > x) {
                alert('Загаданное число меньше!')
                technicalPart(y)
            } else if (y < x) {
                alert('Загаданное число больше!')
                technicalPart(y)
            }
        }
        filter()
        gameOptions()
    }
    technicalPart(userNum)
}
startGame(num)