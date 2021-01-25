// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

window.addEventListener('DOMContentLoaded', () => {
  let errorModule = document.getElementById('modal')
  errorModule.className = "hidden"
});

let heartIcon = document.getElementsByClassName('like-glyph')[0]
heartIcon.addEventListener('click', function() {
  mimicServerCall()
  .then(function() {
    if (heartIcon.innerTEXT == EMPTY_HEART) {
      heartIcon.innerTEXT == FULL_HEART
      heartIcon.className = "activated-heart"
    } else {
        heartIcon.innerText = EMPTY_HEART
        heartIcon.classList.remove("activated-heart")
      }
    })
    .catch((error) => {
      const modal = document.getElementById("modal")
      const message = document.querySelector("p#modal-message")
      message.innerText = error
      modal.classList.remove("hidden")
      window.setTimeout(() => {
        modal.className = "hidden"
      }, 5000)
    })
})

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
