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
// function getRandomQuote(arr) {
//   var randomNumber = Math.floor(Math.random() * quotes.length);
//   return arr[randomNumber];
//   console.log();
// };

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  for (i=0; i < quotes.length; i++) {
    let randomQuote = quotes[randomNumber];
    return randomQuote;
  }


};



/***
 * `printQuote` function
***/




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);