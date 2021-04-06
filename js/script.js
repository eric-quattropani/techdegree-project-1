/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: 'Serenity Now!',
    source: 'Frank Costanza',
    citation: 'Seinfeld',
    year: 1997
  },
  {
    quote: 'Those who dare to fail miserably can achieve greatly',
    source: 'John F. Kennedy'
  },
  {
    quote: 'For a minute there, I lost myself',
    source: 'Radiohead',
    citation: 'Taken from Karma Police - OK Computer',
    year: 1997,
  },
  {
    quote: 'When people say to me: would you rather be thought of as a funny man or a great boss? My answer’s always the same, to me, they’re not mutually exclusive',
    source: 'David Brent',
    citation: 'The Office (UK)'
  },
  {
    quote: 'You miss 100% of the shots you dont take',
    source: 'Wayne Gretzky' 
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote (){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
};


/***
 * `printQuote` function
***/
let quoteObject;
let quoteHTML;

function printQuote() {
  let quoteObject = getRandomQuote();
  let quoteHTML =`<p class="quote"> ${quoteObject.quote} </p> <p class="source"> ${quoteObject.source} `;

  if (quoteObject.citation) {
    quoteHTML += `<span class="citation"> ${quoteObject.citation} </span>`;
  }
  if (quoteObject.year) {
    quoteHTML += `<span class="year"> ${quoteObject.year} </span> </p>`;
  }

  document.getElementById('quote-box').innerHTML = quoteHTML; 
};




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);