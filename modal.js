//MODAL OPENNING AND CLOSING

const diagnostic = document.getElementById("modalDiagnostic");
const physio = document.getElementById("modalPhysio");
const dentist = document.getElementById("modalDentist");
const openDiagnostic = document.getElementById("openDiagnostic");
const openDentist = document.getElementById("openDentist");
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


// open dentist modal
openDentist.addEventListener("click", function () {
  dentist.classList.remove("hidden");
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

// Close modal with Esc key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    // Check if the pressed key is 'Escape'
    document.querySelectorAll(".fixed").forEach((modal) => {
      if (!modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
      }
    });
  }
});
