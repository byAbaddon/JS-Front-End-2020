function create(words) {
   let $content = document.querySelector('#content')

   Array.from(words).forEach(el => {
      let div = document.createElement('div')
      let p = document.createElement('p')
      p.style = 'display:none'
      p.textContent = el

      div.appendChild(p)
      $content.appendChild(div)
   })

   $content.addEventListener('click', function (e) {
      e.target.firstChild.style = 'display : block'
   })
}