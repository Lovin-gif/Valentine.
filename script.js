const messages = [
    "Are you sure?",
    "Saying no won't help you now!😏",
    "Pookie please...",
    "Don't do this to me :(",
    "Still saying no? adorable 🥰",
    "I'll give you my hoodie!",
    "Quite persistent aren't you my love?🥲",
    "I'm literally crying rn...",
    "My heart is breaking... 💔",
    "Pretty please with a cherry on top? 🍒",
    "SAY YES POOKIE! ❤️"
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
