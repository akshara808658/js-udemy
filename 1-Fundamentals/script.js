//fundamentals
/*
//1-alert
alert("Hello world")

//let and const
let js1 = 'amazing'
if(js1==='amazing') alert("Javasceript is FUN!")

 js1='boring'
if(js1 === 'amazing') alert('Java script is FUN!')

//numbers sum
let num = 1+2+3
console.log(num);

// js: js is high-level object-orianted, multi-pardigram programming language
//role in  web development: 
//js:react, angular,view
//ES5: ECMAScript

//Values and variables-----------------
let js2 = 'amazing' // js2: variable
console.log(40+12+2+2-2); // different values

console.log("Alexa"); //value
console.log(12);//value

//variables
let firstName = "Alex" // variable : variables are written in camelCase
console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable names
let alex_john = "AJ";
let $function = 23
let person = "Alex"
let PI = 3.1415
let myFirstJob = "Programmer"; // this is better
let myCurrentJob = "Teacher"; // this too
let job1 = 'programmer';
let job2 = 'teacher'

//Assignment
let country = "India"
let contienet = "Assia"
let population = "3cr"

console.log(country);
console.log(contienet);
console.log(population);
*/

//Data type ---------------------
 /**values 
   * 1- object :
   *   let me = {
   *      name:'Alex'  
   *    }
   * 2-primitive
   *   let firstName = "Alex";
   *   let age = 30
  */
 //PRIMITIVE
 //1-number:floating point numbers - let age = 23
 //2- string:sequence of characters - let firstName = 'Alex'
 //3-Boolean: logical type that can only be true or false - let fullAge = true
 //4- Undefined: not yet defined - let children
 //5-Null : empty
 //6-Symbol(ES2015):values that is unique and cannot be changed (not useful for now)
 //7 - BigInt(ES2020):Larger intergers than the no type can hold
/*
 let javascriptIsFun = true;
 console.log(javascriptIsFun);
 console.log(typeof javascriptIsFun); //Boolean
 console.log(typeof 23);//number
 console.log(typeof 'Alexa');//string
 let year;
 console.log(year);//undefined
 console.log(typeof year);//undefined
 
 year = 2000;
 console.log( typeof year);//number
 console.log(typeof null); //error
 */
 //let and const : introduced in ES6--------------------------
let age = 30;
age = 34
console.log(age); // 34 in const is not work

/*
 const age1 =12
 age1 = 13
 console.log(age1);//type error bcz const considered as constant 
 */
 //Operators in js--------------------------------------
 //Math operators
 const ageAlex = 2025-2005;
 const ageArun = 2025-2008;
 console.log(ageAlex,ageArun);

 console.log(ageAlex * 2, ageArun / 10, 2 ** 3);
 
const firstName = "Alex ";
const lastName = "John";
console.log(firstName+lastName);
 
//Assignment operators
let x = 10 + 5; //15
x += 10;//25
x *=4;//100
x++//101
x--//100
x-=2//98
console.log(x);

//Comparison operators
console.log(ageAlex > ageArun); // >, < , >=, <= 
console.log(ageArun >=18);

//Operator precedence-----------------------
const now = 2037;
let ageJoans = now - 1991;
const ageSarah = now - 2018

console.log(now-1991 > now - 2018);

console.log(25-10-5);//caliculate in left to right

const averageAge = ageJoans + ageSarah / 2
console.log(ageJoans,ageSarah,averageAge);

//String and Template string--------------- 

const firstName1 = "Alex";
const job ='developer';
const birthYear = 2005;
const currentYear = 2025;

const alex= "I'm " + firstName1 + ", " +'a ' + job + " and " + (currentYear-birthYear) + " Years old"
console.log(alex);
//using template string
const newText = `I'm ${firstName1}, a ${job} and ${currentYear-birthYear} Years old`
console.log(newText);
 
console.log(`Just a regular string...`);
//for multiple line use: \n\
console.log(`String with \n\multiple \n\lines`);

//if /else statements------------------------------
const ageOfPerson = 15;
const isOldEnough = ageOfPerson >= 18;

if(isOldEnough){
  console.log('Sarah can start driving license ');
}else{
  const yearLeft = 18 - ageOfPerson;
  console.log(`Sarah is too young. Wait another ${yearLeft} years`); 
}

let century;
const birthYear1 = 1998
if(birthYear <= 2000){
  century = 20;
} else{
  century = 21
}
console.log(century);

//Type Convention And Corecion
const inputYear = '1991'
console.log(Number(inputYear),inputYear); //1991 "1991"
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(12),23);


