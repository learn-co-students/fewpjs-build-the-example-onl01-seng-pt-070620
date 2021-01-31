// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Grab all hearts & add eventlistener
let spans = document.querySelectorAll(".like-glyph");
for (span of spans){
  // console.log(span);
  span.addEventListener("click", likeCallBack);
}


function likeCallBack(e){
  let heart = e.target;
  mimicServerCall()
    .then(function(){
      console.log("click")
  })
    .catch(function(){
      console.log("failed")
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
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
