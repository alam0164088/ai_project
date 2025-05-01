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


const testimonials = [
    {
        quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
        name: "Michael Kaiser",
        title: "CEO of Basecamp Corp",
        avatar: "https://via.placeholder.com/50"
    },
    {
        quote: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view how lorem13 thre farewrerrewerrrrrrrrrrrrrrrrrrrrrrrrrrrwerwrewrewrewr",

        name: "Sarah Johnson",
        title: "Marketing Director at TechTrend",
        avatar: "https://via.placeholder.com/50"
    },
    {
        quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",

        name: "David Lee",
        title: "CTO of Innovate Solutions",
        avatar: "https://via.placeholder.com/50"
    },
    {
        quote: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view how lorem13 thre farewrerrewerrrrrrrrrrrrrrrrrrrrrrrrrrrwerwrewrewrewr",
        name: "Emily Brown",
        title: "Founder of GreenTech",
        avatar: "https://via.placeholder.com/50"
    },
    {
        quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
        name: "Robert Smith",
        title: "COO of Peak Performance",
        avatar: "https://via.placeholder.com/50"
    }
];

let currentIndex = 0;

function updateTestimonial() {
    const quote = document.querySelector('.quote');
    const authorName = document.querySelector('.author-name');
    const authorTitle = document.querySelector('.author-title');
    const avatar = document.querySelector('.avatar');
    const carouselIndex = document.querySelector('.carousel-index');

    quote.textContent = testimonials[currentIndex].quote;
    authorName.textContent = testimonials[currentIndex].name;
    authorTitle.textContent = testimonials[currentIndex].title;
    avatar.src = testimonials[currentIndex].avatar;
    carouselIndex.textContent = `${String(currentIndex + 1).padStart(2, '0')}/05`;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

// Initial load
updateTestimonial();