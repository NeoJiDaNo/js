const data = guestsInfo;
/*
В переменной data хранится такой массив:
[
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]
*/

let res_data = data.map( function(x){ return x['age'] } ).reduce( function( x, y ){ return x + y} )

console.log(res_data);

console.log(res_data / data.length);

function calcAvgAge(array) {
  // Напишите код здесь
}
