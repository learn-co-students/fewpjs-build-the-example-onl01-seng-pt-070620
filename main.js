// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')
const modalMsg = document.getElementById('modal-message')
const likeBtns = document.getElementsByClassName('like-glyph')
// Your JavaScript code goes here!
const likeToggle = (event) => {
  modal.classList.add('hidden')
  const btn = event.target
  if (btn.innerText === EMPTY_HEART) {
    btn.innerText = FULL_HEART
    btn.classList.add('activated-heart')
  }
  else {
    btn.innerText = EMPTY_HEART
    btn.classList.remove('activated-heart')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  for(let btn of likeBtns){
    btn.addEventListener('click', (e) => {
      mimicServerCall()
          .then(() => likeToggle(e))
          .catch(e => {
            modal.classList.remove('hidden')
            modalMsg.innerText = e;
          })
    })
  }
});


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
