// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById("modal")

// Your JavaScript code goes here!

let heartStateInverse = {
  '♡' : '♥',
  '♥' : '♡'
};

let heartClassInverse = {
  'activated-heart' : "like-glyph",
  "like-glyph" : "activated-heart"
};




function changeHeart(e){
  let heart = e.target

  mimicServerCall("bogusUrl")
    .then(function(serverMessage){
      heart.innerText = heartStateInverse[heart.innerText] //swaps empty/full heart
      heart.className = heartClassInverse[heart.className] //swaps classes

    })
    .catch(function(error) {
      console.log(error)
      errorModal.innerText = `Error: ${error}`
      errorModal.className = ""
      setTimeout(returnErrorHidden,2000)
    });
  
}

function returnErrorHidden(){
  errorModal.className = "hidden"
};

let like = document.querySelectorAll(".like-glyph", ".activated-heart");
for (let glyph of like) {
  glyph.addEventListener("click",changeHeart)
};


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
