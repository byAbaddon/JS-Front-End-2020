function notify(message) {
    let div = document.querySelector('#notification')
    div.innerHTML = `<p>${message}</p>`
    div.style.display = 'block'
    setTimeout(() => {
        div.style.display = 'none'
    }, 2000)
}