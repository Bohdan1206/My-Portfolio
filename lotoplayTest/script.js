// ============ BURGER ============//
const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
const closeBurgerBtn = document.querySelector(".mobile-menu__close");
const mobileLinks = document.querySelectorAll(".mobile-menu nav a");

function toggleMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

burger.addEventListener("click", toggleMenu);
closeBurgerBtn.addEventListener("click", toggleMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  });
});

// ============ MODAL ============//
const modal = document.getElementById("ticketModal");
const closeBtn = document.querySelector(".ticket-modal__close");
const cancelBtn = document.querySelector(".modal-btn__cancel");
const confirmBtn = document.querySelector(".modal-btn__confirm");
const priceSpan = document.getElementById("modalPrice");
const qtySelect = document.getElementById("modalQty");

const ticketPrice = 300;

qtySelect.addEventListener("change", () => {
  priceSpan.textContent = ticketPrice * Number(qtySelect.value);
});

function openModal() {
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

document
  .querySelectorAll(".concerts-section__btn, .main-btn-order")
  .forEach((btn) => btn.addEventListener("click", openModal));

closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

confirmBtn.addEventListener("click", () => {
  const city = document.getElementById("modalCity").value;
  const qty = document.getElementById("modalQty").value;

  if (!city) {
    alert("Будь ласка, виберіть місто.");
    return;
  }

  closeModal();

  const url = `confirm.html?city=${encodeURIComponent(city)}&qty=${qty}`;
  window.open(url, "_blank");
});

// ============ BTN-PLACEHOLDER ============//
const callBtn = document.querySelector(".main-btn-order");
const heroSlot = document.querySelector(".main-call-placeholder");
const headerSlot = document.querySelector(".header-call-placeholder");
const heroSection = document.querySelector(".main-section");

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      if (!heroSlot.contains(callBtn)) {
        heroSlot.appendChild(callBtn);
      }
    } else {
      if (!headerSlot.contains(callBtn)) {
        headerSlot.appendChild(callBtn);
      }
    }
  },
  {
    threshold: 0.43,
  }
);

observer.observe(heroSection);
