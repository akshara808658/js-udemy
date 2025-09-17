// const images = document.querySelectorAll('.gallery img');
// const hidden = document.querySelector('.hidden');
// const hiddenImg = document.querySelector('.hiddenImg');
// const closeBtn = document.querySelector('.closeBtn');

// function galleryImg(e){
//   hidden.classList.add('active')
//   hiddenImg.src= e.target.src
// }
// for(let i =0; i<images.length; i++){
//   images[i].addEventListener('click',galleryImg)
//   }
//   closeBtn.addEventListener('click', () => {
//   hidden.classList.remove('active'); // close lightbox
// });


// const images = document.querySelectorAll('.gallery img');
// const lightbox = document.getElementById('hidden');
// const lightboxImg = document.getElementById('hiddenImg');
// const closeBtn = document.getElementById('close-btn');

// images.forEach(img => {
//       img.addEventListener('click', () => {
//         lightbox.classList.add('active');
//         lightboxImg.src = img.src;
//       });
//     });

//     closeBtn.addEventListener('click', () => {
//       lightbox.classList.remove('active');
//     });

//     lightbox.addEventListener('click', (e) => {
//       if (e.target !== lightboxImg) {
//         lightbox.classList.remove('active');
//       }
//     });