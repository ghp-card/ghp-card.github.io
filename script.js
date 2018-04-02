
function randomize() {
  document.getElementById('press').style.color = randomColors();
  document.getElementById('press').style.backgroundColor = randomColors();
}

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

