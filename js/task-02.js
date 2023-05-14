const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
let liEl;
let divEl = document.createElement("div");
let ingredientsColection = ingredients.map((ingredient) => {
  liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  return liEl;
});
console.log(ingredientsColection);
ingredientsEl.append(...ingredientsColection);
console.log(ingredientsEl);
