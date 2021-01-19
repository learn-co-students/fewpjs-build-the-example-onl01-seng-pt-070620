// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorModal = document.getElementById("modal")
errorModal.classList.add("hidden")

let heart = document.querySelector("span.like-glyph")
heart.addEventListener('click', renderPosts)

async function renderPosts() {
  let randomSuccess = Math.floor(Math.random() * Math.floor(500))
  if (randomSuccess < 200) {
    heart.classList.remove("span.like-glyph")
    let fullHeart = document.createElement("span.activated-heart")
    fullHeart.innerText = FULL_HEART
    heart.append(fullHeart)
    if (fullHeart.innerText = FULL_HEART) {
      heart.classList.remove("span.activated-heart")
      let emptyHeart = document.createElement("span.like-glyph")
      emptyHeart.innerHTML = EMPTY_HEART
      heart.append(emptyHeart)
    }
  } else {
    return fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch((error) => {
      setTimeout(function() {
        errorModal.classList.remove("hidden")
        let errorMsg = error.message
        errorModal.innerText = errorMsg
      }, 3000)
    })
  }

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
