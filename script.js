const messages = [
    "LAHHH?",
    "u sure ml?",
    "i love you bri",
    "I LOVE YOU BRI",
    "BRIIII",
    "If you say no, I will be really sad 💔",
    "Im in pieces 😞",
    "BRI THINK ABOUT ART AND ARIELLE.",
    "FINE I WONT ASK AGAIN",
    "kidding, i love you Bri ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
