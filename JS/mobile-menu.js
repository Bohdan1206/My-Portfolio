const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const links = mobileMenu.querySelectorAll("a");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

menuBtnOpen.addEventListener("click", disableScroll);
menuBtnClose.addEventListener("click", disableScroll);

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("is-scroll-disabled");
    mobileMenu.classList.remove("is-open");
  });
});
