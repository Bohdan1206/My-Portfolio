const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-beauty-open");
const modalBtnClose = document.querySelector(".modal-beauty-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
