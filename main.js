// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const like = document.querySelectorAll('.like-glyph')

  //Grabbing all the hearts
  
  function fillIn(e){
    
    let h = e.target
    mimicServerCall()
    .then (function(){
      if(h.innerHTML == FULL_HEART){
        h.innerHTML = EMPTY_HEART}
       else {h.innerHTML = FULL_HEART} 
    })
    .catch(function(error){
      let modal = document.getElementById("modal")
      modal.setAttribute('class', 'reactivated')
    })
  }

//function for use below, handles server call, errors and filling in heart
//the catch change's modal class so it's no longer "hidden"

  for (let heart of like){
    heart.addEventListener("click", fillIn)
  }

  //iteration with a for...of, heart is the variable representing the individual glyph, trigger fillin function on click of each
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
