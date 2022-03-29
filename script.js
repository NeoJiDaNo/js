let btn = document.querySelector('#btn')
let input = document.querySelector('#text')
let e_btn = document.querySelector('#e_btn')
let range = document.querySelector('#range')
let span = document.querySelector('#range-span')
let circle = document.querySelector('#circle')
let square = document.querySelector('#square')


const colors = function() {
    square.style.backgroundColor = input.value
}


// 
const rangeCircle = function(event) {
    span.textContent = event.target.value
    circle.style.height = event.target.value + '%'
    circle.style.width = event.target.value + '%'
    
}
// 
    e_btn.style.display = 'none'
    
    
    span.textContent = '50'
    circle.style.height = '50%'
    circle.style.width = '50%'
    


btn.addEventListener('click', colors)
range.addEventListener('input', rangeCircle)
