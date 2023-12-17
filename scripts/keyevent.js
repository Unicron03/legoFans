var container = document.querySelector(".container");

document.addEventListener('keydown', function(event) {
  if(event.key === 'F' || event.key === 'f') {
    container.classList.add("animShake");
  }
});

document.addEventListener('keyup', function(event) {
  container.classList.remove("animShake");
});