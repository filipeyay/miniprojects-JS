// EQUATION: 2 X PI(3.14159) X RADIUS

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("myBtn").onclick = function () {
  radius = document.getElementById("myInput").value;
  radius = Number(radius);

  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
};
