'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

function openModal(i) {
  console.log(`Button ${i + 1} clicked`);
  //Remove hidden class from modal elements
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

//Expression method only works when it is placed above where it is used
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// Declaration works wherever it is placed in the document.

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Method to closes the modal when the escape button is pressed.
// keydown when key is pressed once, keyup when key is released, and keypress: while key is held.
//e is the keydown event (it's an object, check this in the dom.)
document.addEventListener('keydown', function (e) {
  // e.key retrieves which key is pressed
  console.log(e.key);

  // .if the key is "Escape" & the modal is not yet hidden -> closeModal. Pretty cool.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
