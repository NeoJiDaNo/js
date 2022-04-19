const revision = function () {
    const form2Message = document.querySelector('#form2-message')
    const calcItem = document.querySelectorAll('.calc-item')
    const formName = document.querySelectorAll('.form-name')
    const formEmail = document.querySelectorAll('.form-email')
    const formPhone = document.querySelectorAll('.form-phone')
    
    formPhone.forEach(btn => {
        btn.addEventListener('blur', function () {
            phone(event)
        })
    })

    formEmail.forEach(btn => {
        btn.addEventListener('blur', function () {
            email(event)
        })
    })

    formName.forEach(btn => {
        btn.addEventListener('blur', function () {
            text(event)
        })
    })

    calcItem.forEach(btn => {
        btn.addEventListener('blur', function () {
            calc(event)
        })
    })

    form2Message.addEventListener('blur', function () {
        text(event)
    })

    const phone = function (event) {
        event.target.value = event.target.value.replace(/[^0-9\(\)\-]/g, "").replace(/^[\-]+/g, '').replace(/[\-]+$/g, '').replace(/\-+/g, "-")
    }

    const email = function (event) {
        event.target.value = event.target.value.replace(/[^a-zA-Z\@\-\.\!\~\*\']/g, '').replace(/^[\-]+/g, '').replace(/[\-]+$/g, '').replace(/\-+/g, "-")
    }

    const text = function (event) {
        event.target.value = event.target.value.replace(/[^а-яА-Я\-\ ]/g, '').replace(/^[\s\-]+/g, '').replace(/[\s\-]+$/g, '').replace(/\-+/g, "-").replace(/\ +/g, " ").replace(/(^|\s)\S/g, function (e) {return e.toUpperCase()})
    }

    const calc = function (event) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '')
    }
}

export default revision