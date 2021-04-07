function solve() {
  let elements = document.querySelectorAll('.link-1 a')
  Array.from(elements).forEach(el => {
    el.addEventListener('click', function () {
      let getNumberOfClick = this.nextElementSibling.textContent.split(' ')[1]
      this.nextElementSibling.textContent = `visited ${++getNumberOfClick} times`
    })
  })
}