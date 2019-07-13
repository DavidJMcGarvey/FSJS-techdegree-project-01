// Array of quote objects
let quotes = [
  {
    quote: "Anything is possible!",
    source: "Kevin Garnet",
    year: 2008,
    tag: 'Sports'
  },
  {
    quote: "I called game.",
    source: "Paul Pierce",
    year: 2015,
    tag: 'Sports'
  },
  {
    quote: "Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.",
    source: "John Wooden",
    tag: "Motivation"
  },
  {
    quote: "Silence is a source of great strength",
    source: "Lao Tzu",
    tag: "Reflective"
  },
  {
    quote: "For every minute you remain angry, you give up sixty seconds of peace of mind",
    source: "Ralph Waldo Emerson",
    tag: "Meditative"
  },
  {
    quote: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
    source: "William Arthur Ward",
    tag: "Education"
  }
];

// Function that randomizes number for use in random color selection
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

// Function that changes background color using 
function backgroundColor () {
  let red = randomRGB();
  let green = randomRGB();
  let blue = randomRGB();
  let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.backgroundColor = rgbColor;
}

// Function that randomly selects quotes from array above
function getRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// Function that prints the random quote
function printQuote() {
  let quoteBox = getRandomQuote(quotes);
  let quoteString = '<p class="quote">' + quoteBox.quote + '</p>';
  quoteString += '<p class="source">' + quoteBox.source + ', ';
    // Adds year if applicable
    if (quoteBox.year) {
      quoteString += '<span class="year">' + quoteBox.year + ', </span>';
    }
    // Adds tag if applicable
    if (quoteBox.tag) {
      quoteString += '<span class="tag"> ' + quoteBox.tag + '</span>';
    } else {
        '</p>';
    }
      // Random background color upon call
      document.getElementById('quote-box').innerHTML = quoteString;
      backgroundColor();
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Setting timer that refreshes quote after 30 seconds
setInterval(printQuote, 30000);

// Hey there, thanks for taking the time to review my coding project!
