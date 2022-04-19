const menu = function () {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const menuItems = menu.querySelectorAll('a')
    let arr = []
    
    arr.push(menuBtn)

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }
    
    menuItems.forEach((btn, key) => {
        arr.push(menuItems[key])
    })
    arr.forEach((btn, key) => {
        btn.addEventListener('click', (e) => {
            handleMenu()
        })
    })
}

export default menu