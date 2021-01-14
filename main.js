// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hidden = document.querySelector('#modal')
hidden.className = 'hidden'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function() {


  document.querySelectorAll(".like-glyph").forEach(item => { 
    item.addEventListener('click', (e) => { 
      mimicServerCall('url')
      // Change the heart to a full heart
      // Add the .activated-heart class to make the heart appear red
      .then(() => {
        if (e.target.innerHTML == EMPTY_HEART) {
          // Change the heart to a full heart
          // Add the .activated-heart class to make the heart appear red
          e.target.innerHTML = FULL_HEART
          e.target.classList.add('activated-heart')
        }
        else {
          // Change the heart back to an empty heart
          // Remove the .activated-heart class
          e.target.innerHTML = EMPTY_HEART
          e.target.classList.remove('activated-heart')
        }
      })
      // Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
      .catch((err) => {
        // Display the error modal by removing the .hidden class
        hidden.className = ""
        // Display the server error message in the modal
        alert(err);
        // Use setTimeout to hide the modal after 5 seconds (add the .hidden class)
        setTimeout(() => hidden.className = "hidden", 5000)
      })
    })
  })

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