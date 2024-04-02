//getting all html elements.
var quote = document.getElementById("quote");
var author = document.getElementById("author");
var next_btn = document.getElementById("next_btn")
//lets fetch quotes from api
const api = "https://api.quotable.io/random"

fetch(api)
.then(response=>response.json())
.then(data=>{
    quote.innerText = data.content;
    author.innerText = data.author;

    next_btn.addEventListener("click",newQuote)
})
.catch(error=>{
    console.log("error fetching quote:",error);
});

//getting new quote
function newQuote(){
    fetch(api)
    .then(response => response.json())
    .then(data => {
      quote.innerText = data.content;
      author.innerText = data.author;
    })
    .catch(error => {
      console.error("Error fetching new quote:", error);
    });
}

