const openModal = document.querySelectorAll("#open_modal");
(modalOver = document.getElementById("modal_back")),
  (body = document.getElementsByTagName("body")[0]),
  (modalClose = document.getElementById("modal_close")),
  (scrolBtn = document.getElementById("scroll_btn")),
  (forms = document.querySelectorAll("form")),
  (openMenu = document.getElementById("open_menu")),
  (menu = document.getElementById("menu")),
  (closeMenu = document.getElementById("close_menu"));

// Open Modal
console.log(openModal);
openModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.style.overflow = "hidden";
    modalOver.classList.remove("hide");
  });
});

// Send message
forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    let object = {};

    formData.forEach((value, key) => {
      object[key] = value;
    });

    const telegramTokenBot = "6480010312:AAGkY_tyO05EheM2aw7hdcWlJl9BcYyQ0mw",
      chatId = "@custodian1_support"; // Bu yerga kanal ID-sini yozing

    fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Name: ${object.name}.\nPhone: ${object.phone}. \nEmail: ${object.email}. \nMessage: ${object.message}`,
      }),
    })
      .then((response) => {
        if (response.ok) {
          closeModalFunction();
          alert("Message sent successfully!");
          form.reset();
        } else {
          return response.json().then((errorData) => {
            throw new Error(errorData.description);
          });
        }
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => console.log("Request completed"));
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

// Menu open/close
openMenu.addEventListener("click", () => {
  console.log("open menu");
  menu.classList.toggle("active_menu");
});

document.addEventListener("scroll", () => {
  menu.classList.remove("active_menu");
});

closeMenu.addEventListener("click", () => {
  menu.classList.toggle("active_menu");
});
