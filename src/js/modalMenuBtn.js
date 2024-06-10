const showDialogBtnBurger = document.querySelector('.header-start__button--burger');
const myDialogBurger = document.querySelector('.modal-menu');
const closeDialogBtnBurger = myDialogBurger.querySelector('.mobile-head__button--close');

showDialogBtnBurger.addEventListener('click', (e) => {
  e.stopPropagation;
  myDialogBurger.showModal();
});

closeDialogBtnBurger.addEventListener('click', () => {
  myDialogBurger.close();
});

document.addEventListener('click', (e) => {
  const isClickOnDialog = e.target === myDialogBurger;
  const isClickOnDialogChildrenNodes = myDialogBurger.contains(e.target);
  const isClickOutsideOfDialog = !(isClickOnDialog || isClickOnDialogChildrenNodes);
  if (isClickOutsideOfDialog) {
    myDialogBurger.close();
  }
  return true
});

