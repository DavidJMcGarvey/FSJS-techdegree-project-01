// Array of quote objects
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


// Function that randomly selects quotes from array above
function getRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}


// Create the printQuote funtion and name it
function printQuote() {
  let quoteBox = getRandomQuote(quotes);
  let quoteString = '<p class="quote">' + quoteBox.quote + '</p>'
  quoteString += '<p class="source">' + quoteBox.source;
    if (quoteBox.year) {
      stringQuote += '<span class="year">' + quoteBox.year + '</span>';
    }
    if (quoteBox.citation) {
      stringQuote += '<span class="citation"> ' + quoteBox.citation + '</span>';
    }
    if (quoteBox.tag) {
      stringQuote += '<span class="citation"> ' + quoteBox.tag + '</span>';
    } else {
        '</p>';
    }
document.getElementById('quote-box').innerHTML = quoteString;
}
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);
