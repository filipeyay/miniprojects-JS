// FORMULA: 2 X PI(3.14159) X RAIO

const PI = 3.14159
let raio;
let circunferencia;

document.getElementById("myBtn").onclick = function () {
  raio = document.getElementById("myInput").value;
  raio = Number(raio);

  circunferencia = 2 * PI * raio;
  document.getElementById("myH3").textContent = circunferencia + "cm";
}
