let quotes = [
    "Setting goals is the first step in turning the invisible into the visible.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.",
    "Try not to become a man of success, but rather become a man of value.",
    "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    "A man who has committed a mistake and doesn’t correct it is committing another mistake.",
];

let quote_writer = [
    "Tony Robbins",
    "Winston Churchill",
    "Thomas Edison",
    "George Lorimer",
    "Albert Einstein",
    "Benjamin Disraeli",
    "Confucius Kongzi",
];

const quoteElement = document.getElementById("quote");
const quoteWriterElement = document.getElementById("quote-writer");
const btnElement = document.getElementById("btn");
let qouteIndex = 0;
let qouteWriterIndex = 0;

btnElement.addEventListener("click", () => {
    qouteIndex++;
    qouteWriterIndex++;
    
    // console.log(qouteIndex);
    // console.log("Quotes lenght: ", quotes.length);
    if (qouteIndex < quotes.length) {
        generateQuote();
    }
    else {
        btnElement.disabled = true;
        btnElement.innerHTML = "Quotes End";
    }
});



function generateQuote() {
    
    quoteElement.innerHTML = quotes[qouteIndex]
    quoteWriterElement.innerHTML = quote_writer[qouteWriterIndex]

};

generateQuote();










