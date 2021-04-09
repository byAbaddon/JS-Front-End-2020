function solve() {
   let message = document.querySelector('#chat_input')
   let sendButton = document.querySelector('#send')
   let chatMessage = document.querySelector('#chat_messages')


   sendButton.addEventListener('click', function () {
      let div = document.createElement('div')
      div.classList.add('message', 'my-message')
      div.textContent = message.value
      chatMessage.appendChild(div)

      message.value = ''
   })
}