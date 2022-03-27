function hamburgerFunction() {
  let lists = document.querySelector(".nav-list");
  let mockup = document.querySelector(".mockup-mobile-img");
  lists.style.display === "flex" ? lists.style.display = "none" : lists.style.display = "flex";
  mockup.style.display === "none" ? mockup.style.display = "block" : mockup.style.display = "none";
}

document.querySelector(".hamburger").addEventListener("click", hamburgerFunction);
