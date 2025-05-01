document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});

const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const chatMessageContainer = document.getElementById('chatMessageContainer');

sendMessageButton.addEventListener('click', function() {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
        sendMessage(messageText);
        messageInput.value = "";
    }
});

messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessageButton.click();
    }
});

function sendMessage(messageText) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerHTML = `
        <img src="css/image/image-1.png" alt="Profile" class="profile-pic">
        <div class="message-content">
            <p>${messageText}</p>
        </div>
    `;
    chatMessageContainer.appendChild(messageElement);
    chatMessageContainer.scrollTop = chatMessageContainer.scrollHeight;
}

document.querySelectorAll('.auto-message').forEach(item => {
    item.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        sendMessage(message);
    });
});

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});