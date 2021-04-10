function validate() {
    let checkElement = document.querySelector('#email')

    document.addEventListener('change', function () {

        let pattern = /^[a-z]+@[a-z]+\.[a-z]{2,}/g
        let regex = pattern.test(checkElement.value)
        if (regex) {
            checkElement.classList.remove('error')
        } else {
            checkElement.classList.add('error')
        }
    })
}


//-----------------------------(2)------------JQuery
// function validate() {
//     let pattern = /^[a-z]+@[a-z]+\.[a-z]{2,}/g
//     let email = $('#email').focus().addClass('error')

//     email.change('click', function () {
//         if ($(this).val().match(pattern)) {
//             email.removeClass('error')
//         } else {
//             email.addClass('error')
//         }
//     })
// }