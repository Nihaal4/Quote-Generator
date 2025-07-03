const quotes = [
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Turn your wounds into wisdom.",
    "The best way to predict your future is to create it.",
    "In the middle of every difficulty lies opportunity."];
const quoteText = document.getElementById('quote');
const quoteBtn = document.getElementById('new-quote-btn');
function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}
quoteBtn.addEventListener('click', getNewQuote);
