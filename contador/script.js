const myLabel = document.getElementById("myLabel");
const diminuirBtn = document.getElementById("diminuirBtn");
const resetarBtn = document.getElementById("resetarBtn");
const aumentarBtn = document.getElementById("aumentarBtn");

contador = 0;

diminuirBtn.onclick = function () {
  contador--;
  myLabel.textContent = contador;
}

resetarBtn.onclick = function () {
  contador = 0;
  myLabel.textContent = contador;
}

aumentarBtn.onclick = function () {
  contador++;
  myLabel.textContent = contador;
}
