const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


const openModal = function(){
  //modal.className = "modal";
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
};

const closeModal = function(){
  //modal.className = "hidden";
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
};

btnOpenModal.forEach(elt => {
  elt.addEventListener('click', openModal)
});

// for(let i = 0; i< btnOpenModal.length; i++){
//   btnOpenModal[i].addEventListener('click', openModal)
// }

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    closeModal();
  }
})