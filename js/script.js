const openModal = document.querySelectorAll("#open_modal");
const modalOver = document.getElementById("modal_back");
const body = document.getElementsByTagName("body")[0];
const modalClose = document.getElementById("modal_close");

openModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.style.overflow = "hidden";
    modalOver.classList.remove("hide");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeModalFunction();
  }
});
modalClose.addEventListener("click", closeModalFunction);

function closeModalFunction() {
  body.style.overflow = "auto";
  modalOver.classList.add("hide");
}
