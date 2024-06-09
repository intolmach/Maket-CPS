const showDialogBtnBurger = document.querySelector('.header-start__button--burger');
const myDialogBurger = document.querySelector('.modal-menu');
const closeDialogBtnBurger = myDialogBurger.querySelector('.mobile-head__button--close');

showDialogBtnBurger.addEventListener('click', () => {
  myDialogBurger.showModal();
});

closeDialogBtnBurger.addEventListener('click', () => {
  myDialogBurger.close();
}); 