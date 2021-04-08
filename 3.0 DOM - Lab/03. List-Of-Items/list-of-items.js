function addItem() {
    let getText = document.querySelector('#newItemText').value
    let crateLi = document.createElement('li')
    return document.querySelector('#items').appendChild(crateLi).textContent = getText
}