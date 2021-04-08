function createArticle() {
	let title = document.querySelector('#createTitle')
	let content = document.querySelector('#createContent')
	let articles = document.querySelector('#articles')

	let h3 = title.value
	let p = content.value

	if (h3 && p) {
		pattern = `<article><h3>${h3}</h3><p>${p}</p></article>`
		articles.insertAdjacentHTML('beforeend', pattern)
		title.value = ''
		content.value = ''
	}

}