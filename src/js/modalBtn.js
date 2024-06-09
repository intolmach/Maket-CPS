const showDialogBtnCall = document.querySelectorAll('.header-end__button--call');
const myDialogCall = document.querySelector('.modal-call');
const closeDialogBtnCall = myDialogCall.querySelector('.menu-modal__close-button');

showDialogBtnCall.forEach((btn) => {
  btn.addEventListener('click', () => {
    myDialogCall.showModal();
  });
});

closeDialogBtnCall.addEventListener('click', () => {
  myDialogCall.close();
});


const showDialogBtnRepair = document.querySelectorAll('.header-end__button--chat');
const myDialogRepair = document.querySelector('.modal-feedback');
const closeDialogBtnRepair = myDialogRepair.querySelector('.menu-modal__close-button');

showDialogBtnRepair.forEach((btn) => {
  btn.addEventListener('click', () => {
    myDialogRepair.showModal();
  });
});

closeDialogBtnRepair.addEventListener('click', () => {
  myDialogRepair.close();
});

const showDialogBtnBurger = document.querySelector('.header-start__button--burger');
const myDialogBurger = document.querySelector('.modal-menu');
const closeDialogBtnBurger = myDialogBurger.querySelector('.mobile-head__button--close');

showDialogBtnBurger.addEventListener('click', () => {
  myDialogBurger.showModal();
});

closeDialogBtnBurger.addEventListener('click', () => {
  myDialogBurger.close();
}); 