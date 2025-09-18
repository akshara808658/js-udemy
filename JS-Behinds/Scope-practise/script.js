'use strict'

function calcAge(birthYear){
  const age = 2037 - birthYear
  function printAge(){
    let output = `${firstName}, You are ${age}, born in ${birthYear}`
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996){
      var millenial = true;

      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer score's variable
       output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`; // print steven because js look in the crnt score 
      console.log(str);

      function add(a,b){
        return a+b;
      }

      // output = 'NEW OUTPUT!';
    }
  //  console.log(str); // not accessible
    console.log(millenial);// var is accessible
    // console.log(add(1,9));
    console.log(output);
  }
  printAge();
  return age
}
const firstName = 'Alexa'
calcAge(1991);
// console.log(age); it's not accessible bcz inner function can only accessible outer 
// printAge()