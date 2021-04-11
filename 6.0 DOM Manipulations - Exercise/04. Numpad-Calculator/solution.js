function solve() {
  let calcField = document.querySelector('#expressionOutput')
  let resultFiled = document.querySelector('#resultOutput')
  let clearBtn = document.querySelector('.clear')
  let getAllButtons = document.querySelectorAll('.keys')

  const operation = ['/', 'x', '-', '+']
  let currentResult = ''

  clearBtn.addEventListener('click', function () {
    calcField.textContent = ''
    resultFiled.textContent = ''
    currentResult = ''
  })


  Array.from(getAllButtons).forEach(el => {
    el.addEventListener('click', clickedKey)
  })

  function clickedKey(e) {
    if (e.target.value !== '=') {
      if (operation.includes(e.target.value)) {
        currentResult += ' ' + e.target.value + ' '
      } else {
        currentResult += e.target.value
      }
      calcField.textContent = currentResult
    } else {
      try {
        let calcResult = eval(currentResult)
        resultFiled.textContent = calcResult
      } catch {
        resultFiled.textContent = 'NaN'
      }
    }

  }
}