// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorModel = document.getElementById("modal")
errorModel.classList.add("hidden")

let heart = document.querySelector("span.like-glyph")
heart.addEventListener('click', mimicServerCall)

async function mimicServerCall() {
  return fetch("http://localhost:3000/posts")
  .then(response => response.json())
  .then(function(results) {
    console.log(results)
    renderResults(results)
  })
  .catch(error) {
    alert(error.message)
  }
}

function renderResults(results) {
  method: "POST",
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
  
  body: JSON.stringify({
    "id": id,
    "title": title,
    "author": author
  }
  )
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
