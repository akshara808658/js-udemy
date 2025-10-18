const container = document.querySelector('.container');
const loadText = document.querySelector('.loading-text');

let load = 0;

let int = setInterval(blurring,30)

function blurring(){
  load++

  if(load > 99){
    clearInterval(int)
  }
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1,0)
  container.style.filter = `blur(${scale(load, 0 ,100,30,0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

//centered pyramid of number
// let n =5;
// for(let i =0; i < n; i++){
//   let row = '';
//   for(let k =0; k< n-(i+1); k++){
//     row += ' '
//   }
//   for(let j =0; j<=i; j++){
//     row += (j+1) + '' 
//   }
//   for(let j = i; j >= 1; j--){
//     row += j;
//   }
//   console.log(row)
// }

//
// for(let i=0; i<n; i++){
//   let row = '';
//   for(let k =0; k< n-(i+1); k++){
//     row += '  ';
//   }
//   for(let j=0; j<=i; j++){
//     row += '-' +(j+1) 
//   }
// console.log(row)
// }
//
