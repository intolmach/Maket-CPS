const showDialogBtnCall = document.querySelectorAll('.header-end__button--call, .contact-buttons__button--call');
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