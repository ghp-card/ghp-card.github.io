
function randomize() {
  document.getElementById('pidor').style.color = randomColors();
  document.getElementById('pidor').style.backgroundColor = randomColors();
  document.getElementById('lang').style.color = document.getElementById('pidor').style.color;
  document.getElementById('lang').style.backgroundColor = document.getElementById('pidor').style.backgroundColor;
}

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

