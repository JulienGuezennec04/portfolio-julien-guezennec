const header = document.querySelector('.navbar');

window.onscroll = function () {
  if (window.scrollY >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};