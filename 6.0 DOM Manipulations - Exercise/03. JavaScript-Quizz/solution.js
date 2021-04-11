function solve() {
  let section = document.querySelectorAll('section');
  let newContent = document.querySelector('#results')
  let result = document.querySelector('#results li h1')
  let arr = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']

  let counter = 0
  let increase = 0

  document.addEventListener('click', function (e) {
    if (arr.some(a => a === e.target.textContent)) {
      counter++;
    }
    section[increase].style.display = 'none'
    increase++;
    if (increase < 3) {
      section[increase].style.display = 'block'
    }


    if (increase === 3) {
      newContent.style.display = 'block'
      result.innerHTML = counter === 3 ? `You are recognized as top JavaScript fan!` : `You have ${counter} right answers`
    }

  })

}