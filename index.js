let database = {
  w: {
    'image':'crash.png',
    'sound':'crash.mp3'
  },
  'a': {
    'image':'kick.png',
    'sound':'kick-bass.mp3'
  },
  's': {
    'image':'snare.png',
    'sound':'snare.mp3'
  },
  'd': {
    'image':'tom1.png',
    'sound':'tom-1.mp3'
  },
  'j': {
    'image':'tom2.png',
    'sound':'tom-2.mp3'
  },
  'k': {
    'image':'tom3.png',
    'sound':'tom-3.mp3'
  },
  'l': {
    'image':'tom4.png',
    'sound':'tom-4.mp3'
  }
}

let buttons = document.querySelectorAll('button.drum');
for(let button of buttons) {
  button.addEventListener('click', eventHandler);
}
function eventHandler() {
  let letter = this.textContent;
  makeSound(letter);
  buttonAnimation(letter);
}

document.addEventListener('keydown', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})


function makeSound(letter) {
  if(letter == 'w') {
    var audio = new Audio('sounds/'+database.w.sound);
    audio.play();
  }
  else if (letter == 'a') {
    var audio = new Audio('sounds/'+database.a.sound);
    audio.play();
  } else if(letter =='s') {
    var audio = new Audio('sounds/'+database.s.sound);
    audio.play();
  } else if (letter == 'd') {
    var audio = new Audio('sounds/'+database.d.sound);
    audio.play();
  } else if (letter=='j') {
    var audio = new Audio('sounds/'+database.j.sound);
    audio.play();
  } else if (letter == 'k') {
    var audio = new Audio('sounds/'+database.k.sound);
    audio.play();
  } else if (letter=='l') {
    var audio = new Audio('sounds/'+database.l.sound);
    audio.play();
  }
  else {
    console.log('An unexpected error has occured.');
  }
}

function buttonAnimation (currKey) {
  let theButton = document.querySelector('.'+currKey);
  theButton.classList.add('pressed');
  setTimeout(function() {theButton.classList.remove('pressed')},80);
}
