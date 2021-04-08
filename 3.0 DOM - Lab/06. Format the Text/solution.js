function solve() {
  let collectionArray = document.querySelector('#input').textContent.split('. ')

  let output = document.querySelector('#output')
  let result = ''
  let counter = 0

  while (collectionArray.length !== 0) {
    counter++
    if (collectionArray.length != 1) {
      result += collectionArray.shift() + '.'
    } else{
      result += collectionArray.shift()
    }
    
    if (counter % 3 == 0) {
      let p = document.createElement('p')
      p.textContent = result
      output.appendChild(p)
      result = ''
      counter = 0
    }
  }

  let p = document.createElement('p')
  p.textContent = result
  output.appendChild(p)

}