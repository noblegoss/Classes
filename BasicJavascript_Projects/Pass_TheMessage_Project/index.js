const sendBtn = document.querySelector('.sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('.messageOut');

sendBtn.addEventListener('click', sendMessage);

function sendMessage(){
    let content = messageIn.value; // to catch the value typed in our input
    messageOut.innerHTML = content

}