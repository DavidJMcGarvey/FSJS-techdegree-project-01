// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
let quotes = [
  {
    quote: "Anything is possible!",
    source: "Kevin Garnet",
    year: 2008
  },
  {
    quote: "I called game.",
    source: "Paul Pierce",
    year: 2015
  },
  {
    quote: "Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.",
    source: "John Wooden"
  },
  {
    quote: "Silence is a source of great strength",
    source: "Lao Tzu"
  },
  {
    quote: "For every minute you remain angry, you give up sixty seconds of peace of mind",
    source: "Ralph Waldo Emerson"
  },
  {
    quote: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
    source: "William Arthur Ward"
  }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote() {
 // Code to get quote FROM array
    let randomQuote = Math.random(quotes);
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
 // Code to print the quote
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);
}
printQuote()

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);
