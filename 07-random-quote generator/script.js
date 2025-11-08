// Random Quote Generator
// Day 07 - JavaScript Learning Journey

// Array of quotes - practicing arrays!
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        text: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    }
];

// DOM Elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

console.log('Quote Generator initialized!');
console.log(`Loaded ${quotes.length} quotes`);

// Keep track of the last quote to avoid duplicates
let lastQuoteIndex = -1;

// Function to generate random quote - practicing random number generation!
function getRandomQuote() {
    let randomIndex;
    
    // Prevent showing the same quote twice in a row
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex && quotes.length > 1);
    
    // Update last quote index
    lastQuoteIndex = randomIndex;
    
    // Get the quote object at that random index
    const randomQuote = quotes[randomIndex];
    
    // Log for debugging
    console.log(`Generated quote #${randomIndex + 1}`);
    
    return randomQuote;
}

// Test the function
console.log('Testing random quote generation:');
console.log(getRandomQuote());

// Function to display quote on the page
function displayQuote() {
    const quote = getRandomQuote();
    const quoteContent = document.querySelector('.quote-content');
    
    // Remove fade-in class
    quoteContent.classList.remove('fade-in');
    
    // Force reflow to restart animation
    void quoteContent.offsetWidth;
    
    // Update the DOM with the new quote
    quoteText.textContent = `"${quote.text}"`;
    authorText.textContent = `- ${quote.author}`;
    
    // Add fade-in animation
    quoteContent.classList.add('fade-in');
    
    console.log('Quote displayed with animation!');
}

// Event listener for the button
newQuoteBtn.addEventListener('click', displayQuote);

// Display a random quote on page load
displayQuote();