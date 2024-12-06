//MODAL OPENNING AND CLOSING

const diagnostic = document.getElementById("modalDiagnostic");
const physio = document.getElementById("modalPhysio");
const openDiagnostic = document.getElementById("openDiagnostic");
const openPhysio = document.getElementById("openPhysio");
const closeModal = document.getElementById("closeModal");

// open diagnostic modal
openDiagnostic.addEventListener("click", function () {
  diagnostic.classList.remove("hidden");
});

// open Physio modal
openPhysio.addEventListener("click", function () {
  physio.classList.remove("hidden");
});

// Attach close event listeners to all close buttons
document.querySelectorAll(".closeModal").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const modal = button.closest(".fixed");
    if (modal) {
      modal.classList.add("hidden");
    }
  });
});
