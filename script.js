let num = 266219;
let arr = num.toString().split("");

let result = arr.reduce(function(sum, current) {
    return sum * current;
});

console.log(result);

let obj = (result ** 3);

console.log(obj);
console.log(obj.toString().substring(0, 2));

