const showDialogBtnRepair = document.querySelectorAll('.header-end__button--chat, .contact-buttons__button--chat');
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

document.addEventListener('click', (e) => {
  if (e.target === showDialogBtnRepair || e.target === closeDialogBtnRepair) {
    return;
  }
  const isClickOnDialog = e.target === myDialogRepair;
  if (isClickOnDialog) {
    myDialogRepair.close();
  }
  return true
});