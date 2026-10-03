let form = document.querySelector("form");
let buttonForm = document.querySelector("btn");
let text = document.querySelector(".message");

form.onsubmit = function(event){
  event.preventDefault();
  text.textContent = "Ваш заказ одобрен!";
};
