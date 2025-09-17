// 'use strict'

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal')
// const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);

//  function closeModal(){
//    modal.classList.add('hidden')
//   overlay.classList.add('hidden')
//  }
//  function operModal(){
//   console.log('Button clicked');
//     // modal.style.display = 'block';
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden')
//  }
// for(let i = 0; i< btnOpenModal.length; i++)
//  btnOpenModal[i].addEventListener('click',operModal);

// btnCloseModal.addEventListener('click', closeModal)
// //for clicking on background they display none
// overlay.addEventListener('click',closeModal)
'use strict'

const modal = document.querySelector('.modal');
const btnshowModal = document.querySelectorAll('.show-modal');
const btncloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function showModal(){
 modal.classList.remove('hidden')
 overlay.classList.remove('hidden')
}
function closeModal(){ 
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
for(let i=0; i< btnshowModal.length; i++)
  btnshowModal[i].addEventListener('click',showModal)

btncloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click',closeModal)

//"ESC keypress event : global events"

document.addEventListener('keydown',function(e){ // we get which key is pressed
console.log(e.key);

if(e.key === 'Escape' && !modal.classList.contains('hidden')){ // if model is open then clicking the escape btn then its hidden
    closeModal()
  }
})