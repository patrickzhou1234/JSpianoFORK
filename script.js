function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const curKey = document.querySelector(`.wkey[data-key="${e.keyCode}"],.bkey[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop the function from running altogether 
  audio.currentTime = 0; // rewind to the start

  audio.play();
  curKey.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if not transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.wkey, .bkey');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

window.onclick = function() {
  document.getElementsByClassName("instructions")[0].innerHTML = "Press the keys on your keyboard to play the piano!"; 
}
