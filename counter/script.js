const myLabel = document.getElementById("myLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

counter = 0;

decreaseBtn.onclick = function () {
  counter--;
  myLabel.textContent = counter;
};

resetBtn.onclick = function () {
  counter = 0;
  myLabel.textContent = counter;
};

increaseBtn.onclick = function () {
  counter++;
  myLabel.textContent = counter;
};
