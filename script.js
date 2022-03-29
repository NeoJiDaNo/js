let btn = document.querySelector('#btn')
let input = document.querySelector('#text')

const colors = function() {
    btn.style.backgroundColor = input.value
}

btn.addEventListener('click', colors)

// 

let e_btn = document.querySelector('#e_btn')
e_btn.style.display = 'none'

// 

let range = document.querySelector('#range')
let span = document.querySelector('#range-span')
let circle = document.querySelector('#circle')

const rangeCircle = function(event) {
    span.textContent = event.target.value
    circle.style.height = event.target.value + '%'
    circle.style.width = event.target.value + '%'
}

range.addEventListener('input', rangeCircle)
