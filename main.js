{
    test: /\.(woff|woff2|ttf|otf|eot)$/,
    use: 'file-loader',
  }
  

const burgerMenuBtn = document.getElementById("burgerMenuBtn");
const navbar = document.getElementById("navbar");
const burgerIcon = document.getElementById("burgerIcon");

// Toggle navbar visibility and burger icon animation on button click
burgerMenuBtn.addEventListener("click", () => {
  // Toggle navbar visibility
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("block");

  // Toggle burger icon to X and vice versa
  if (navbar.classList.contains("block")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-times"); // Change to X icon
  } else {
    burgerIcon.classList.remove("fa-times");
    burgerIcon.classList.add("fa-bars"); // Change back to burger icon
  }
});
