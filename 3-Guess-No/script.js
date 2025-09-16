
// 'use strict'

// console.log(document.querySelector('.message').textContent);//start guessing...

// //what is DOM and DOM manipulation
// //DOM : structured rep of html doci=uments.allows js to access html element & styles to manipukate them.
// //DOM is not a property of js this is a web API : application programming interface

// //selecting and mainpulating element
// /*
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value);
// */
// //Handile click event
// let secretNumber = Math.trunc(Math.random()*20) +1;
// let score = 20;
// let highscore =0

// //to reduce the code we put for message
// const displayMessage = function(message){
//   document.querySelector('.message').textContent = message;
// }

// document.querySelector('.check').addEventListener('click',function(){
//   const guess = Number(document.querySelector('.guess').value) 
//   console.log(guess);  

//   //when there is no input
//  if(!guess){
//   // document.querySelector('.message').textContent = 'No number';
//   displayMessage('No number')

//   //player wins
//  }else if(guess === secretNumber){
//   // document.querySelector('.message').textContent = 'Correct Number!';
//   displayMessage('Correct Number')
//   //secret number
//   document.querySelector('.number').textContent = secretNumber;
//  //Manipulating css styles
//   document.querySelector('body').style.backgroundColor =' #60b347';

//   //change width
//   document.querySelector('.number').style.width = '30rem';

//   //highscore
//   if(score > highscore){
//     highscore = score;
//     document.querySelector('.highscore').textContent = highscore;
//   }
  
// //when guess is wrong
// }else if(guess !== secretNumber){
//    if(score > 1){
//     // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low'
//     displayMessage(guess >secretNumber ? 'Too high' : 'Too low')
//     score--;
//     document.querySelector('.score').textContent = score
//    }else{
//     // document.querySelector('.message').textContent = 'You lost the game';
//     displayMessage('You lose the game!')
//     document.querySelector('.score').textContent = 0;
//    }
//   }
// });

//    /*
// // when guess is too high
//  }else if(guess > secretNumber){
//    if(score > 1){
//       document.querySelector('.message').textContent = 'Too high!'
//       score--;
//       document.querySelector('.score').textContent = score
//    }else{
//     document.querySelector('.message').textContent = 'You lost the game';
//     document.querySelector('.score').textContent = 0;
//    }

//    //when guess is too low
//  }else if (guess < secretNumber){
//     if(score > 1){
//       document.querySelector('.message').textContent = 'Too low!'
//       score--;
//       document.querySelector('.score').textContent = score
//     }else{
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent =0;
//     }
//  }
// });
// */

// //  CHALLENGE1 : for again btn
// document.querySelector('.again').addEventListener('click', function(){
//   score =20;
//   secretNumber = Math.trunc(Math.random()*20)+1;

//   // document.querySelector('.message').textContent = 'Start guessing...'
//   displayMessage('Strat guessing...'); 
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').textContent = '';
  
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem'
// })



// // 'use strict'

// // let secretNumber = Math.trunc(Math.random()*20)+1;
// // let score =20;
// // let highscore = 0;

// // document.querySelector('.check').addEventListener('click',function(){
// // const guess = Number(document.querySelector('.guess').value);
// // console.log(guess);

// // if(!guess){
// //   document.querySelector('.message').textContent = 'No number'
// // }else if(guess === secretNumber){
// //   document.querySelector('.message').textContent = 'Correct Number';

// //   document.querySelector('.number').textContent = secretNumber
// //   document.querySelector('body').style.backgroundColor =' #60b347'
// //   document.querySelector('.number').style.width = '30rem';

// //   if(score > highscore){
// //     highscore = score
// //     document.querySelector('.highscore').textContent = highscore;
// //   }
// // }else if(guess > secretNumber){
// //   if(score > 1){
// //     document.querySelector('.message').textContent = 'Too high'

// //     score--;
// //     document.querySelector('.score').textContent = score;
// //   }else{
// //     document.querySelector('.message').textContent = 'You lost the game'
// //     document.querySelector('.score').textContent = 0;
// //   }
// // }else if (guess < secretNumber){
// //   if(score > 1){
// //     document.querySelector('.message').textContent = 'Too low'

// //     score--;
// //     document.querySelector('.score').textContent = score;
// //   }else{
// //     document.querySelector('.message').textContent = 'You lost the game'
// //     document.querySelector('.message').textContent = 0
// //   }
// // }
// // })
// // //again

// // document.querySelector('.again').addEventListener('click', function(){
// //   score = 20;
// //   secretNumber = Math.trunc(Math.random()*20)+1

// //   document.querySelector('.number').textContent = '?';
// //   document.querySelector('.message').textContent = 'start guessing...'
// //   document.querySelector('.score').textContent = score;
// //   document.querySelector('body').style.backgroundColor = ' #222'
// //   document.querySelector('.number').style.width = '15rem'
// // })
////////////////////////////////////////////////////////////////////


'use strict'

let secretNumber = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore =0

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

//check
document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if(!guess){
    displayMessage('No number')
  }else if(guess === secretNumber){
   displayMessage('Correct Number');
   document.querySelector('.number').textContent = secretNumber;

   document.querySelector('body').style.backgroundColor = ' #60b347'
   document.querySelector('.number').style.width = '30rem'

   if(score > highscore){
    highscore = score
    document.querySelector('.highscore').textContent = highscore
   }
  }else if (guess !== secretNumber){
    if(score >1){
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      displayMessage('You lost the game')
      document.querySelector('.score').textContent = 0
    }
  }
});

//again
document.querySelector('.again').addEventListener('click',function(){
  secretNumber = Math.trunc(Math.random()*20)+1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?'
  document.querySelector('.score').textContent = score;
  document.querySelector('.score').textContent = '';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
})
