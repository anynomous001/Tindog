// Remember to import the data and Dog class!
//import dogs from 'data.js'

import {dogsData} from  './data.js'
import {displayLike,displayDisLike} from  './utils.js'
import {Dog} from  './Dog.js'
 




const likeBtn = document.getElementById('heart-btn')
const dislikeBtn = document.getElementById('cross-btn')

/*function getNewDog() {
  if (dogsData.length === 0) {
      likeBtn.disabled = true
      dislikeBtn.disabled = true
    return null;
  }
  let nextDog = dogsData.shift();
  return new Dog(nextDog);
}*/
function getNewDog() {
  const randomIndex = Math.floor(Math.random() * dogsData.length);
  const randomDog =dogsData[randomIndex];
  console.log(`New Dog: ${randomDog}`);
  return new Dog(randomDog);
}

/*btnDiv.addEventListener('click', function(event){
    dogChar.display(event.target.id)
    
    if(!dogChar.hasBeenLiked){
            if(dogChar.hasBeenSwiped){
                dogChar.hasBeenLiked = true
                    setTimeout(function(){
                    dogChar = getNewDog();
                    render();
                    dogChar.hasBeenLiked = false
                }, 2000);
                document.getElementById('heart-btn').disabled = false
                document.getElementById('cross-btn').disabled = false
            }
    }
})*/

likeBtn.addEventListener('click', function(event) {
  if (dogChar !== null) {
    if (!dogChar.hasBeenSwiped) {
      dogChar.display(event.target.id);
      setTimeout(() => {
        dogChar = getNewDog();
        render();
      }, 2000);
      setTimeout(() => {
        dogChar.hasBeenSwiped = false;
      }, 3000);
    }
  }
});

dislikeBtn.addEventListener('click', function(event) {
  if (dogChar !== null) {
    if (!dogChar.hasBeenSwiped) {
      dogChar.display(event.target.id);
      setTimeout(() => {
        dogChar = getNewDog();
        render();
      }, 2000);
      setTimeout(() => {
        dogChar.hasBeenSwiped = false;
      }, 3000);
    }
  }
});

const container = document.getElementById('container');

function render() {
  if (dogChar === null) {
    document.body.classList.add('body');
    document.body.innerHTML = 
      `<div class='lastMessage'>
         <h1>
           No more dogs to show!
         </h1>
       </div>`;
  } else {
    container.innerHTML = dogChar.renderHtml();
  }
}

let dogChar = getNewDog()

if (dogChar !== null) {
  render();
}