let formEl = document.querySelector(".login-form");
let passwordInput = document.getElementsByName("password");
let emailInput = document.getElementsByName("email");
const loginBtn = document.querySelector("button");

function formSubmite(event) {
  event.preventDefault();
  let email = this.elements.email;
  let password = this.elements.password;
  let emailValue = email.value;
  let passwordValue = password.value;
  if (emailValue !== "" && passwordValue !== "") {
    formEl.elements.email.value = emailValue;
    formEl.elements.password.value = passwordValue;
    let loginObj = {
        userEmail: formEl.elements.email.value,
        userPassword: formEl.elements.password.value,
      };
      console.log(loginObj);
      formEl.reset();
  }
 else 
    {
      alert(" Всі поля повинні бути запонені!");
    }
  
};
formEl.addEventListener("submit", formSubmite);
