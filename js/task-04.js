let counterValue = 0;
const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');
let valueEl = document.querySelector('#value');

console.dir(valueEl);
incrBtn.addEventListener("click", ()=>{
    counterValue+=1;
    valueEl.textContent = counterValue;
    console.log(counterValue);
});
decrBtn.addEventListener("click", ()=>{
    counterValue-=1;
    valueEl.textContent = counterValue;
    console.log(counterValue);
});


