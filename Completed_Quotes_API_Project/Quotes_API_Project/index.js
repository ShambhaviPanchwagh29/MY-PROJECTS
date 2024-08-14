//Step -1 -> Quotable

const quoteContent = document.querySelector('.quote');    // Define a constant variable 'quoteContent' that selects the HTML element with the class 'quote'
const authorName = document.querySelector('#authorName')  // Define a constant variable 'authorName' that selects the HTML element with the id 'authorName'
const button = document.querySelector('button')           // Define a constant variable 'button' that selects the HTML element with the tag 'button'
const read = document.querySelector('.sound')             // Define a constant variable 'read' that selects the HTML element with the class 'sound'
const copy = document.querySelector('.copy')              // Define a constant variable 'copy' that selects the HTML element with the class 'copy'
const twitter = document.querySelector('.twitter')        // Define a constant variable 'twitter' that selects the HTML element with the class 'twitter'

const URL = "https://api.quotable.io/random";            // Define a constant variable 'URL' that stores the API endpoint for fetching random quotes
async function getQuote() {                              // Define an asynchronous function 'getQuote' that fetches a random quote from the API and updates the HTML elements with the fetched data
    button.classList.add('loading')                      // Add the 'loading' class to the 'button' element and update its innerText to 'Loading Quote...'
    button.innerText = "Loading Quote..."
    const promiseResponse = await fetch(URL) //Asycn data fetch API   // Fetch the data from the API using the 'fetch' function and convert the response to JSON format
    const response = await promiseResponse.json() //JSON -> JS Object
    let quote = response.content; //Quote data -> Quote           // Extract the quote and author name from the JSON response
    quoteContent.innerText = quote; //Para text -> Quote    // Update the innerText of the 'quoteContent' and 'authorName' HTML elements with the fetched quote and author name
    let authorValue = response.author; //Author Name store
    authorName.innerText = authorValue; //Autor text -> Curr Author
    button.classList.remove('loading')                     // Remove the 'loading' class from the 'button' element and update its innerText to 'New Quote'
    button.innerText = "New Quote"
}

//Speeech Synthesis

read.addEventListener('click',()=>{                              // Add an event listener to the 'read' HTML element that speaks the quote and author name using the SpeechSynthesis API
       let speechObject = new  SpeechSynthesisUtterance(`${quoteContent.innerText} by ${authorName.innerText}`)//Object

   speechSynthesis.speak(speechObject)
})

//Copy Functionality

copy.addEventListener('click',()=>{                        // Add an event listener to the 'copy' HTML element that copies the quote to the clipboard
    navigator.clipboard.writeText(quoteContent.innerText)
})

//twitter

twitter.addEventListener('click',()=>{                         // Add an event listener to the 'twitter' HTML element that opens a new window with a pre-filled tweet containing the quote
    let twitterURL = `https://twitter.com/intent/tweet?text=${quoteContent.innerText}`;
    window.open(twitterURL);
})


button.addEventListener('click', () => {         // Add an event listener to the 'button' HTML element that calls the 'getQuote' function when clicked
    getQuote();
})





