function toggle() {
    let span = document.querySelector('span')
    let extraDiv = document.querySelector('#extra')
    let button = document.querySelector('.button')
    
    if (span.textContent === 'More') {
        button.textContent = 'Less'
        extraDiv.style = 'display : block'
    } else {
        button.textContent = 'More'
        extraDiv.style = 'display : none'
  }
}  

//---------------------------------(2)---------with Jquery

// function toggle() {
//     let span = $('span')

//     if (span.text() === 'More') {
//         span.text('Less')
//         $('#extra').css('display', 'block')
//     } else {
//         span.text('More')
//         $('#extra').css('display', 'none')
//     }
// }





//----------------------------(3)-----------WTF ?
// function toggle() {
//     let extraDiv = document.querySelector('#extra')
//     let button = document.querySelector('.button')
//     let isClosed = extraDiv.offsetHeight === 0

//     if (isClosed) {
//         extraDiv.style = 'display : block'
//         button.textContent = 'Less'
//     } else {
//         extraDiv.style = 'display : none'
//         button.textContent = 'More'
//     }
// }