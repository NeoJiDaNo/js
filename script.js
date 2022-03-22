let text = prompt('skolko', 2000);
let num;
const getNum = function(a) {
    if (false == isNaN(a)) {
        num = Number(a)
    } else {
        text = prompt('skolko', 2000)
        getNum(text)
    }
}
console.log(getNum(text));
console.log(typeof num);
console.log(num);