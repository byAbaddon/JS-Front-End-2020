function stopwatch() {
    let $time = document.querySelector('#time')
    let $startBtn = document.querySelector('#startBtn')
    let $stopBtn = document.querySelector('#stopBtn')

    function showTime(sec) {
        let time = new Date(0, 0, 0)
        time.setSeconds(sec)
        return $time.textContent = time.toLocaleTimeString().slice(3, 8)
    }

    let timerSetInterval = ''

    $startBtn.addEventListener('click', function () {
        $time.textContent = '00:00'
        let addSec = 1
        $startBtn.setAttribute('disabled', 'true')
        $stopBtn.removeAttribute('disabled')
        timerSetInterval = setInterval(() => {
            showTime(addSec++)
        }, 1000)
    })

    $stopBtn.addEventListener('click', function () {
        clearInterval(timerSetInterval)   
        $stopBtn.setAttribute('disabled', 'true')
        $startBtn.removeAttribute('disabled')
    })
}