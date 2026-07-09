const body = document.body;
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".menu-close");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function openMenu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  body.classList.add("menu-open");
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  body.classList.remove("menu-open");
}

burger?.addEventListener("click", openMenu);
closeButton?.addEventListener("click", closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const whyModal = document.querySelector("[data-modal]");
const whyModalOpen = document.querySelector("[data-modal-open]");
const whyModalClose = document.querySelectorAll("[data-modal-close]");

function openWhyModal() {
  whyModal?.classList.add("is-open");
  body.classList.add("menu-open");
}

function closeWhyModal() {
  whyModal?.classList.remove("is-open");
  body.classList.remove("menu-open");
}

whyModalOpen?.addEventListener("click", openWhyModal);

whyModalClose.forEach((button) => {
  button.addEventListener("click", closeWhyModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeWhyModal();
});

const slides = document.querySelectorAll(".certificate-slide");
const prevBtn = document.querySelector(".cert-prev");
const nextBtn = document.querySelector(".cert-next");

let currentCert = 0;

function updateCertificateSlider() {
  slides.forEach((slide) => {
    slide.classList.remove("active", "prev", "next", "prev-2", "next-2");
  });

  const total = slides.length;

  const prev = (currentCert - 1 + total) % total;
  const next = (currentCert + 1) % total;
  const prev2 = (currentCert - 2 + total) % total;
  const next2 = (currentCert + 2) % total;

  slides[currentCert].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
  slides[prev2].classList.add("prev-2");
  slides[next2].classList.add("next-2");
}

prevBtn.addEventListener("click", () => {
  currentCert = (currentCert - 1 + slides.length) % slides.length;
  updateCertificateSlider();
});

nextBtn.addEventListener("click", () => {
  currentCert = (currentCert + 1) % slides.length;
  updateCertificateSlider();
});

updateCertificateSlider();

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;

    document.querySelectorAll(".faq-item").forEach((faq) => {
      if (faq !== item) faq.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
