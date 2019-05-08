var nav = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");

nav.classList.remove("navigation--nojs");

navToggle.addEventListener("click", function () {
  if (nav.classList.contains("navigation--closed")) {
    nav.classList.remove("navigation--closed");
    nav.classList.add("navigation--opened");
  } else {
    nav.classList.add("navigation--closed");
    nav.classList.remove("navigation--opened");
  }
});

var order = document.querySelector(".week-product__link");
var modal = document.querySelector(".modal");
var close = document.querySelector(".modal__overlay");
var links = document.querySelectorAll(".cart");

links.forEach(function (button) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
  })
});

if (order) {
  order.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show")
  });
}

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
  }
});
