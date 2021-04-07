function extractText() {
    let collectionLi = document.querySelectorAll('li')
    let textArea = document.querySelector('#result')
    let result = []

    Array.from(collectionLi).forEach(el => {
        result.push(el.textContent)
    })

    textArea.value = result.join('\n')
}