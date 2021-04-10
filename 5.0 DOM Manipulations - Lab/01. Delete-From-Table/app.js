function deleteByEmail() {
    let $input = document.querySelector('input')
    let $table = document.querySelectorAll('#customers tbody tr')
    let $result = document.querySelector('#result')

    for (const el of Array.from($table)) {
        if (el.lastElementChild.textContent === $input.value) {
            el.remove()
            $result.textContent = 'Deleted.'
            break
        } else {
            $result.textContent = 'Not found.'
        }

    }
    
    $input.value
}