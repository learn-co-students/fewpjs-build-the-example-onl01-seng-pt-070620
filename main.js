// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errors = document.getElementById("modal")
errors.setAttribute('class', 'hidden')

let allHearts = document.querySelectorAll(".like")

function likePost(event) {
  let like = event.target
  mimicServerCall("bogusUrl")
  .then(function(message){
    if (like.innerText === EMPTY_HEART) {
      like.innerText = FULL_HEART
      like.setAttribute('class', 'activated-heart')
    }
    else {
      like.innerText = EMPTY_HEART
      like.removeAttribute('class', 'activated-heart')
    }
  })
  .catch(function(error) {
    errors.className = "";
    alert("Something went wrong!")
    setTimeout(function() {
      errors.className = "hidden"
    }, 5000)
  })
}

for (let glyph of allHearts) {
  glyph.addEventListener("click", likePost);
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
