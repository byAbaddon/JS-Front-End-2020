function solve() {
    let inputButton = document.querySelector('#exercise article button')
    let getAllLi = document.querySelectorAll('li')

    inputButton.addEventListener('click', function () {
        let getInput = inputButton.previousElementSibling
        let inputText = getInput.value
        let inputTextIndexFirstLetter = getInput.value[0].toUpperCase()

        for (let i = 0; i < getAllLi.length; i++) {
            if (inputTextIndexFirstLetter.charCodeAt() - 65 === i) {
                let addName = inputTextIndexFirstLetter + inputText.slice(1,).toLowerCase()
              
                if (getAllLi[i].textContent.length === 0) {
                    getAllLi[i].textContent = addName
                } else {
                    getAllLi[i].textContent = getAllLi[i].textContent + ', ' + addName
                }

                break
            }
        }
        getInput.value = ''
    })
}

//---------------------------------------(2)-----------------Jquery
// function solve() {

//     let input = $('input')
//     $('button').on('click', function () {
//         let getFirstLetter = input.val()[0].toUpperCase()
//         let inputField = getFirstLetter + input.val().slice(1,).toLowerCase()
//         let position = inputField.charCodeAt() - 65
//         let li = $('ol li').eq(position)
//         if (position >= 0 && position <= 26) {
//             if (li.text().length === 0) {
//                 li.text(inputField)
//             } else {
//                 let moreNames = li.text() + ', ' + inputField
//                 li.text(moreNames)
//             }
//         }

//         input.val('')
//     })
// }


//-----------------------------------------(3)-----------------------Fucking Judge
// function solve() {
//     let inputButton = document.querySelector('#exercise article button')
//     document.querySelector('ol').style = 'text-transform: capitalize'
//     let getAllLi = document.querySelectorAll('li')

//     inputButton.addEventListener('click', function () {
//         let getInput = inputButton.previousElementSibling
//         let inputText = getInput.value
//         let inputTextIndexFirstLetter = getInput.value[0].charCodeAt() - 97

//         for (let i = 0; i < getAllLi.length; i++) {
//             if (inputTextIndexFirstLetter === i) {
//                 if (getAllLi[i].textContent.length === 0) {
//                     getAllLi[i].textContent = inputText
//                 } else {
//                     getAllLi[i].textContent += ', ' + inputText
//                 }

//                 break
//             }
//         }
//         getInput.value = ''
//     })
// }