const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");
let liEl;
let divEl = document.createElement("div");
ingredients.forEach((ingredient) => {
  liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  divEl.append(liEl);
})
ingredientsEl.append(divEl);
console.log(ingredientsEl)

