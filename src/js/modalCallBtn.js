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

document.addEventListener('click', (e) => {
  if (e.target === showDialogBtnCall || e.target === closeDialogBtnCall) {
    return;
  }
  const isClickOnDialog = e.target === myDialogCall;
  const isClickOutsideOfDialog = isClickOnDialog;
  if (isClickOutsideOfDialog) {
    myDialogCall.close();
  }
  return true
});