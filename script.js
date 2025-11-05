// Add a subtle shadow to the nav when scrolling
const nav = document.getElementById("top-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});
