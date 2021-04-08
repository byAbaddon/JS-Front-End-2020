function solve() {
  let list = document.getElementById('items')
  let getText = document.getElementById('newText')
  let creteLi = document.createElement('li')
  creteLi.innerHTML = `${getText.value} <a href="#">[Delete]</a>`
  list.appendChild(creteLi)
  getText.value = ''
  
  list.addEventListener('click', function(e) {
       e.target.parentNode.remove()
  })
}


