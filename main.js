///burger menu

const burgerMenuBtn = document.getElementById("burgerMenuBtn");
const navbar = document.getElementById("navbar");
const burgerIcon = document.getElementById("burgerIcon");
const overlay = document.getElementById("overlay");

// Toggle navbar visibility and burger icon animation on button click
burgerMenuBtn.addEventListener("click", () => {
  // Toggle navbar visibility
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("block");
  overlay.classList.toggle('hidden');


  // Toggle burger icon to X and vice versa
  if (navbar.classList.contains("block")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-times"); // Change to X icon
  } else {
    burgerIcon.classList.remove("fa-times");
    burgerIcon.classList.add("fa-bars"); // Change back to burger icon
  }
});

//////////////ANIMATIONS///////////////////

////////////////navs////////////
ScrollReveal().reveal(".nav", {
  opacity: 0,
  duration: 1500,
});

////////////////texts////////////

ScrollReveal().reveal(".title", {
  opacity: 0,
  duration: 1500,
  distance: "50px",
  easing: "ease-in-out",
  origin: "top",
});

ScrollReveal().reveal(".subTitle", {
  opacity: 0,
  duration: 1500,
  distance: "30px",
  easing: "ease-in-out",
  origin: "bottom",
});

////////////////banners////////////

ScrollReveal().reveal(".banner", {
  opacity: 0,
  duration: 1500,
  distance: "50px",
  easing: "ease-in-out",
  origin: "bottom",
});

ScrollReveal().reveal(".left", {
  opacity: 0,
  duration: 1500,
  distance: "100px",
  easing: "ease-in-out",
  origin: "left",
});

ScrollReveal().reveal(".right", {
  opacity: 0,
  duration: 1500,
  distance: "100px",
  easing: "ease-in-out",
  origin: "right",
});

ScrollReveal().reveal(".bottom", {
  opacity: 0,
  duration: 1500,
  distance: "20px",
  easing: "ease-in-out",
  origin: "bottom",
});

////////////////buttons////////////

ScrollReveal().reveal(".button", {
  opacity: 0,
  duration: 1000,
  delay: 200,
});
