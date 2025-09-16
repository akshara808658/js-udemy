'use strict'; // help find error 

let hasDriversLicence = false;
const passText = true;

if(passText) hasDriversLicence = true;
if(hasDriversLicence) console.log("I can drive :D");

//const interface = "Audio";
// const private = 123;

//fn : 
function logger(){
  console.log("My name is Alexa");
}
//calling/running /invoking fn
logger();

function fruitProcessors(apples,oranges){
 console.log(apples,oranges);
 const juice = `Juice with ${apples} apples
 and ${oranges} oranges.`;
 return juice;
}
// const appleJuice = fruitProcessors(5,0);// 5,0
// console.log(appleJuice);//Juice with 5 apples and 0 oranges.

console.log(fruitProcessors(5,0));// or use like this

const appleOrangeJuice = fruitProcessors(2,4)
console.log(appleOrangeJuice);

const num = Number('23') // this is a number test by enter num in console.

//fn declaration vs expressions
//fn declaration
function calcAge1(birthYear){
  return 2037-birthYear;
}
// console.log(calcAge1(2005));
const age1 = calcAge1(1991);

//fn expression
const calcAge2 = function(birthYear){
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1,age2);

//Arrow fn
const calcAge3 = birthYear => 2037-birthYear
const age3 =calcAge3(1991);
console.log(age3);

//
const yearUntilRetirement = (birthYear,firstName) => {
  const age4 = 2025 - birthYear;
  const retirement = 65- age4;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}
console.log(yearUntilRetirement(2005,"Alexa"));
console.log(yearUntilRetirement(2003,"Alen"));

//fn calling other fns
function cutFruitPieces(fruit){
  return fruit * 4;
}
function fruitProcessors(apples,oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const Juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`
  return Juice;
}
console.log(fruitProcessors(2,3));

//Receving fn
const calcAge =function (birthYear){
  return 2037-birthYear;
}

const yearUntilRetirement2 = function (birthYear,firstName){
  const age = calcAge(birthYear);
  const retirement = 65-age;
  if(retirement > 0){
    return retirement;
    console.log(`${firstName} retires in ${retirement} years`);
    
  }else{
    return -1;
    console.log(`${firstName} has already retired `);
    
  }
  // return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(1991,"Alexa"));
console.log(yearUntilRetirement(1950,'Mike'));

// //overview
// //fn declaration : fn that can be used before it's declared
// function calcAge(birthYear){
//   return 2037- birthYear;
// }
// //fn expression: Essentially a fn value stored in a variable
// const calcAge = function (birthYear){
//   return 2037 - birthYear;
// };
// //arrow fn: great for a quick one-line fns.has no this keyword
// const calcAge = birthYear => 2037 - birthYear;

//ARRAYS
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal','Steven','Peter'];
console.log(friends);

const years =new Array(1991,2000,2005)
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);//3
console.log(friends[friends.length- 1]);

friends[2] ='Jay'
console.log(friends);
//
const firstName = 'Jonas';
const jonas =[firstName,'Schmedtmann',2037-1991,'teacher',friends]
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAges = function(year){
  return 2037-year;
}
const y =[1990,1967,2002,2010,2018];

// console.log(calcAges(y));
const ages1 = calcAges(y[0]);
const ages2 = calcAges(y[1]);
const ages3 = calcAges(y[y.length-1]);
console.log(ages1,ages2,ages3);

const ages = [calcAge(y[0],calcAge(y[1]),calcAge(y[y.length - 1]))];
console.log(ages);

//Basic array operations
const person =['Michael','Steven','Peter'];
person.push('Alexa'); // for adding
console.log(person);

person.unshift('John'); // add as first element
console.log(person);

person.pop();// remove last element
console.log(person);

person.shift(); //remove first element
console.log(person);

console.log(person.indexOf('Peter'));//2
console.log(person.indexOf('Steven'));//-1

console.log(person.includes('Alexa'));//is exist that element or include that element.
console.log(person.includes('23'));//false

if(person.includes('Peter')){
  console.log('You have a friend called Peter');
}else{
  console.log(`You dont have the friend name like this`);
}

//Object
const joansArray ={
  firstName:"Jonas",
  lastName:"Man",
  age:2037-2005,
  job:'developer',
  friends:['Peter',"Alexa","Zera"]
}
console.log(joansArray);

//to get elements
console.log(joansArray.lastName);//Man
console.log(joansArray['lastName']);//Man

console.log(joansArray.friends);

const nameKey = 'Name';// this is a name in firstName
console.log(joansArray['first'+nameKey]);
console.log(joansArray['last'+nameKey]);

// console.log(joansArray.'last'+nameKey); // syntaxError:bcz of brackets

/*
// const interestdIn = prompt('What do you want to know about Jonas? Choose between firstName, lastname, age, job, and friends');
// console.log(joansArray[interestdIn]);

// if(joansArray[interestdIn]){
//   console.log(joansArray[interestdIn]);
// }else{
//   console.log("wrong request!");
// }
// joansArray.location = 'USA';
// joansArray['twitter'] = '@joanasman_kiya';
// console.log(joansArray);

*/
//Challenges
//Joans has 3 friends and his best friend is called Alexa
console.log(`${joansArray.firstName} has ${joansArray.friends.length}, friends and his best friend is called ${joansArray.friends[1]}`);

//obj methods
// const details = {
//   firstName:"Alexa",
//   lastName:"John",
//   birthYear:2005,
//   job:"Developer",
//   friends:['Robert','Peter','Alen'],
//   hasDriversLicence:true,

//   calcAge: function (birthYear){
//     return 2037 - birthYear;
//   }
// };

// console.log(details.calcAge(2005));
// console.log(details['calcAge'](2005));

const details = {
  firstName:"Alexa",
  lastName:"John",
  birthYear:2005,
  job:"Developer",
  friends:['Robert','Peter','Alen'],
  hasDriversLicence:true,

  // calcAge: function (){
  //   // console.log(this); // full details
  //   return 2037 - this.birthYear; //this method
  // }
  calcAge: function(){
    this.age = 2037-this.birthYear;
    return this.age;
  },
  getSummary: function(){
   return `${this.firstName} is a ${this.calcAge()} - years old ${this.job}, and he has a ${this.hasDriversLicence ? "a": "no"} driver's licence.`
  }
};

console.log(details.calcAge());
// console.log(details.age());
// console.log(details.age());
// console.log(details.age());

//challenge
//alexa is a 32-years old developer, and he has a driver's licence.
console.log(details.getSummary());

// Loop
// console.log("Lifting weights repetition 1"); // not writing like this by using loops
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");

//for loop keeps running while condition is TRUE
for(let rep =1; rep <= 10; rep++){
  console.log(`Lifting weights repetition ${rep}`);
}

//Looping Arrays,Breaking and Constructing
const annArray =[
  'Anna',
  'John',
  2037 - 2005,
  'Doctor',
  ['Michel','Peter','Steven'],
  true
];
const types =[]
// console.log(annArray[0]);
// console.log(annArray[1]);
// console.log(annArray[2]);

// for(let i=0; i <= 5 ; i++){
//   console.log(annArray[i],typeof annArray[i]); //boolean

//   types[i] = typeof annArray[i]
// }

// console.log(types);
for(let i=0;i<= annArray.length; i++){
  console.log(annArray[i], typeof annArray[i]);
  
  types.push(typeof annArray[i]);
}
console.log(types);

const years1 = [1990,2003,2020,1992];
const ages4 =[];

for(let i =0; i< years1.length; i++){
  ages4.push(2025 - years1[i])
}
console.log(ages4);

//continue & break;
console.log('---ONLY STRINGS---');
for(let i=0; i < annArray.length ; i++){
  if(typeof annArray[i] !=='string') continue;

  console.log(annArray[i], typeof annArray[i]);
}

console.log('---BRAKE WITH NUMBER---');
for(let i=0; i<annArray.length ; i++){
  if(typeof annArray[i] === 'number') break;

  console.log(annArray[i], typeof annArray[i]); // Anna string ,John string  bcz break it by no
}

//Looping Backwards and loops in loops
const arr =[
  'Alexa',
  'USA',
  '2025-2005',
  'developer',
  ['Michel','Peter','Steven'],
  true
];
//0,1,2,...
//4,3,2,...
for(let i=arr.length-1; i>= 0; i--){
console.log(arr[i]);
}
//
for(let exercise = 1; exercise < 4; exercise++){
  console.log(`----Starting excerise ${exercise}`);
  for(let rep = 1; rep < 5; rep++){
    console.log(`Lifting weight repetition ${rep}`); // this sub of 3 starting exercise
  }
};

//while loop
let rep =1;
while (rep <= 10){
  console.log(`WHILE:Lifting weights repetition ${rep}`);
  rep++;
};

/*
// let dice =Math.random() * 6 // give a random no 0 to 6 with decimals
let dice = Math.trunc(Math.random()*6)+1 // round it as natural no using trunc
console.log(dice);
*/
let dice = Math.trunc(Math.random()* 6)+1;

while(dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random()*6)+1
  if(dice === 6){
    console.log('Loop is about to end...');
  }
}

//
//prettier is useful thing to formatte the code
//settings default form- esbenp -prettiervscode