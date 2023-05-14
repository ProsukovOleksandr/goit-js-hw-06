function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
let spanEl = document.querySelector(".color");
btnEl.addEventListener("click", (event)=>{
  event.preventDefault();
  bodyEl.style.backgroundColor=`${getRandomHexColor()}`;
  spanEl.textContent= getRandomHexColor();
});