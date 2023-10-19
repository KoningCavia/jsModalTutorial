'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

function openModal(i) {
  btnOpenModal[i].addEventListener('click', function () {
    console.log(`Button ${i + 1} clicked`);
    //Remove hidden class from modal elements
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
  openModal(i);
}

//Expression method only works when it is placed above where it is used
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// Declaration works wherever it is placed in the document.

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
