const menuBurger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("active");
  nav.classList.toggle("active");
});
