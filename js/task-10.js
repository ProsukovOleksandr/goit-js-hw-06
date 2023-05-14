function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
let box = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let index = 0; index <= amount; index += 1) {
    let newBox = document.createElement("div");
    newBox.classList.add("new-box");
    newBox.style.width = `${30 + index * 10}px`;
    newBox.style.height = `${30 + index * 10}px`;
    newBox.style.backgroundColor = `${getRandomHexColor()}`;
    box.append(newBox);
  }
}
function destroyBoxes() {
  let destroyBox = document.querySelector(".new-box");

  destroyBox.remove();
}
createBtnEl.addEventListener("click", (amount) => {
  amount = inputEl.value;
  createBoxes(amount);
});
destroyBtnEl.addEventListener("click", (amount) => {
  amount = inputEl.value;
  for (let index = 0; index <= amount; index += 1) {
    destroyBoxes();
  }
});
