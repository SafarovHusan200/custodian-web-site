const openModal = document.querySelectorAll("#open_modal");
const modalOver = document.getElementById("modal_back");
const body = document.getElementsByTagName("body")[0];
const modalClose = document.getElementById("modal_close");
const scrolBtn = document.getElementById("scroll_btn");

// Open Modal
openModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.style.overflow = "hidden";
    modalOver.classList.remove("hide");
  });
});

// Close Modal
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

// Scroll add/remove btn
const handleScroll = () => {
  const scrolled = document.documentElement.scrollTop;
  if (scrolled > 500) {
    scrolBtn.classList.add("active");
  } else {
    scrolBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", handleScroll);

// Scroll top
scrolBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
