const writeButton = document.querySelector('.write-link');
const modalWrite = document.querySelector('.modal-write');
const writeClose = modalWrite.querySelector('.modal-close');
const writeName = modalWrite.querySelector('[name=name]');

writeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrite.classList.add('modal-show');
  writeName.focus();
});

writeClose.addEventListener('click', function () {
  modalWrite.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modalWrite.classList.remove('modal-show');
  }
});
