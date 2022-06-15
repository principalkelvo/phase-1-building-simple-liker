// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal');
const heart = document.querySelector('.like-glyph')

modal.classList.add('hidden');


heart.addEventListener('click', function(){
  mimicServerCall().then(function(response){
    heartClicked();
    console.log(response);
  }).catch(function(error){
modal.classList.remove('hidden');
    console.log(error);
  }
  )
})

function heartClicked() {
  if(heart.innerHTML === EMPTY_HEART) {
    //add class
    heart.classList.add('activated-heart');
    heart.innerHTML = FULL_HEART;
  }
  else {
    heart.classList.remove('activated-heart');
    heart.innerHTML = EMPTY_HEART;
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
