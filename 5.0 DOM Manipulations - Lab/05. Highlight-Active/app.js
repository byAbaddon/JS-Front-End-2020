function focus() {
    let input = document.querySelectorAll('input')

    Array.from(input).forEach(function (el) {
        el.addEventListener('focus', function () {
            this.parentNode.className = 'focused'
        })
    })

    Array.from(input).forEach(function (el) {
        el.addEventListener('blur', function () {
            this.parentNode.classList.remove('focused')
        })
    })
}

//-----------------------------------------(2)------------------------JQuery
// function focus() {

//     $('input').focus(function () {
//         $(this).parent().addClass('focused')
//     })

//     $('input').focusout(function () {
//         $(this).parent().removeClass('focused').fadeOut(500).fadeIn(800)
//     })
// }