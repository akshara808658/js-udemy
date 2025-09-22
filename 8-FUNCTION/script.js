'use strict';

//Default fn prameters-------------
//allow named para to be intialized with default values if no value or undefined is passed.,random number.
//eg
function multiply(a,b=2){
  return a*b;
}
console.log(multiply(5)) // 10 (b defaults to 2);
console.log(multiply(5,3)) //15 (b is explicitly(directly) 3)
//default para are used only if the arguments is undefined.
//passing null or other falsy values will not trigger the default.
function greet(name = 'Guest'){
  console.log(name)
}
greet(undefined); //Guest
greet(null); // null

//eg
const bookings =[];
function createBooking(flightNum,numPassengers=1, price= 199 * numPassengers){
  
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 999;

  const booking ={
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123',5);
createBooking('LH123',2);
createBooking('LH123',undefined,1000);

//How Passing Arguments Works: value vs. Reference--------------
//primitive: passed fns as a copy
//changing the value inside the fn does not affect the original
let x = 10;

function changeValue (num){
  num = 20;
}
changeValue(x);
console.log(x);
//object/arrays/fns
//passed by refference
//modifing elements changes the original object.
const obj = {name: 'Alexa'}

function changeObject (o){
  o.name = 'John'
}
changeObject(obj)
console.log(obj.name) //john : changing
//eg

const flight = 'LH234';
const alexa = {
  name: 'Alex John',
  passport : 1235656754
}
function checkIn(flightNum,passenger){
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if(passenger.passport === 1235656754){
    alert('Check in')
  }else{
    alert('wrong passport')
  }
}
// checkIn(flight,alexa);
// console.log(flight); // does not cahnge
// console.log(alexa) // change

function newPassport(person){
  person.passport =Math.trunc(Math.random()*10000000000000.00)
};
newPassport(alexa);
console.log(flight,alexa)

//First -Class and higher-order fns---------------
