function addItem() {
    let firstNum = document.querySelector('#newItemText')
    let secondNum = document.querySelector('#newItemValue')
    let result = firstNum.value + ' ' + secondNum.value
    let template = `<option>${result}</option>`
    document.querySelector('#menu').insertAdjacentHTML("beforeend", template)

    firstNum.value = ''
    secondNum.value = ''
}