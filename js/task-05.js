const nameInput = document.querySelector("#name-input");
const nameSpan = document.querySelector("#name-output");
nameInput.addEventListener("change", (event) => {
  nameSpan.textContent = event.currentTarget.value;
  if (nameInput.value === "") {
    nameSpan.textContent = "Anonymous";
  }
});
