/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Here I created an array named 'quotes' holding 5 different objects with various amounts of parameters. At the end of the project, I added an additional property named 'tags' to some of the objects which I also added in its own CSS properties to make it look smaller and give it italics.
var quotes = [
  {
    quote: 'Serenity Now!',
    source: 'Frank Costanza',
    citation: 'Seinfeld',
    year: 1997,
    tags: 'tags: TV Show, Comedy'
  },
  {
    quote: 'Those who dare to fail miserably can achieve greatly',
    source: 'John F. Kennedy'
  },
  {
    quote: 'For a minute there, I lost myself',
    source: 'Radiohead',
    citation: 'Karma Police - OK Computer Album',
    year: 1997,
    tags: 'tags: Music, Alternative Rock'
  },
  {
    quote: 'When people say to me: would you rather be thought of as a funny man or a great boss? My answer’s always the same, to me, they’re not mutually exclusive',
    source: 'David Brent',
    citation: 'The Office (UK)',
    tags: 'tags: TV Show, Comedy'
  },
  {
    quote: 'You miss 100% of the shots you dont take',
    source: 'Wayne Gretzky' 
  }
];


// Created the getRandomQuote function by firstly assigning a random number to the variable randomNumber. From there I was able to use that random number to return a random object from the quotes array and assigning that to the variable randomQuote.
function getRandomQuote (){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
};


// I created the function called printQuote by   (finish this)  using template literals to place both the quote and source parameters 
// I then used an if statement to allow for the times there are other parameters (citation, year, tags) that will need to be added to the HTML. Since the objects have a varying amount of parameters, I used IF statements. If they had all the exact same parameters I would of just added them to a single line string.
function printQuote() {
  let quoteObject = getRandomQuote();
  let quoteHTML =`<p class="quote"> ${quoteObject.quote} </p> <p class="source"> ${quoteObject.source} `;

  if (quoteObject.citation) {
    quoteHTML += `<span class="citation"> ${quoteObject.citation} </span>`;
  }
  if (quoteObject.year) {
    quoteHTML += `<span class="year"> ${quoteObject.year} </span>`;
  }
  if (quoteObject.tags) {
    quoteHTML += `<span class="tags"> ${quoteObject.tags} </span></p>`;
  }
 
  document.getElementById('quote-box').innerHTML = quoteHTML; 
};



// I struggled with the last two extra credit tasks - but gave the random background color a go (see below..)

// function random_bg_color() {
//   let x = Math.floor(Math.random() * 256);
//   let y = Math.floor(Math.random() * 256);
//   let z = Math.floor(Math.random() * 256);
//   let bgColor =  `rgb( ${x}, ${y}, ${z} )`;
//   document.body.innerText = bgColor;

//   document.getElementById('quote-box').innerHTML = quoteHTML;  = background-color;
// }

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote , false);
