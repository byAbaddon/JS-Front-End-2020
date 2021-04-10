function attachGradientEvents() {
    let gradient = document.querySelector('#gradient-box')
    let result = document.querySelector('#result')

    gradient.addEventListener('mousemove', function (e) {

        let percent = ~~(e.offsetX / (e.target.clientWidth - 1) * 100)
        result.textContent = percent + '%'
    })
}