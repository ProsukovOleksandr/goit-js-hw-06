let inputEl = document.querySelector("#font-size-control");
let textEl = document.querySelector("#text");
let fontValue;
inputEl.addEventListener("input",(event)=>{
    fontValue = event.currentTarget.value;
    textEl.style.fontSize =`${fontValue}px`;
});
