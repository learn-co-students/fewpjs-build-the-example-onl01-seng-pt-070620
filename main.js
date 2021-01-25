// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let liked = false
// err.classList.add('hidden')

document.addEventListener('DOMContentLoaded', function(){
  const err = document.querySelector('div#modal')

})

const hearts = Array.from(document.querySelectorAll('ul span.like-glyph'))

function likePost(heart) {
  if (liked) {
    heart.innerText = FULL_HEART
    heart.classList.add('activated-heart')
  } else {
    heart.innerText = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
}

function displayError() {
  err.classList.add('hidden')
}

for (const element of hearts) {
  element.addEventListener('click', function(e){
    let heart = e.target.closest('ul span.like-glyph')
    liked = !liked
    mimicServerCall()
      .then(() => {
        likePost(heart)
        console.log("u like dis")
      })
      .catch(() => {
        console.log(err.innerText)
        displayError()
        err.classList.remove('hidden')
        setTimeout(displayError, 5000)
      })
  })
  }

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        err.classList.remove('hidden')
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
