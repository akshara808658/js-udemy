//Default fn prameters-------------
//allow named para to be intialized with default values if no value or undefined is passed.,
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
//fn statement || // fn declaration
function a(){
  console.log('a called')
}
//fn expression: assign  an value into a fn , it is an annonimous fn - does not have name and does not have their own
const b = function (){
  console.log('b called')
}
//diff: hoisting 
//in fn declaration: hoisted : can be called before it is defined , usage: std fn
//fn expression: anonymous, not hoisted - only the variable is hoisted fn not, usage: can be stored in variable passed as callbacks
//if we put an name to fn expression then it is called named fn expression
a();
b();
// xyz() // error

//difference b/w para & arguments
//arguments: the value which pass inside an fn is called parameters
//para: get those value is parameters

//FIRST CLASSS FN : ability of fn can be use value and can pass argument to another fn and can be returned from the fn 
function xyz(){}
b(xyz)

//HIGHER ORDER FN
//a fn which takes another fn as argument  or return a fn from it
// function x(){
//   console.log('Helloo')
// }
// function y(x){
//   x();
// }
const radius = [2,4,6];
function area(radius){
  return Math.PI*radius*radius;
}
function diameter(radius){
  return 2*radius
}
function circumference(radius){
  return 2*Math.PI*radius 
}

function prblm(radius,logic){
  const output = [];
  for(let i=0; i< radius.length; i++){
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(prblm(radius,area))
console.log(prblm(radius,diameter))
console.log(prblm(radius,circumference));

//callback fn passed into higher order fn and excuted inside it

//FUNCTION RETUNING 
const greetings = function(greeting){
  return function(name){
  console.log(`${greeting} ${name}`); 
  }
}
const greeterHey = greetings('Hey');
greeterHey('Alexa');
greeterHey('John');

greetings('Hello')('Alex');

//
const greetingArr = greeting => name => console.log(`${greeting} ${name}`);

greetingArr('Hi')('Alexa')

//THIS keyword----------------------- 
//  exceuting context of an object
// console.log(this) // it's pointing global object-window

//same in here global object is point
// function getNames(){
//   console.log(this)
// }

// getNames()

//in here : person object
// const person = {
//   name: 'Alexa',
//   getName(){
//     console.log(this)
//   },
// };
// person.getName();

//
// function getName(){
//   console.log(this.name);
//   console.log(this.age);
// }
// const person1 = {
//   name: 'Alexa',
//   age:12,
//   method: getName,
// };

// const person2 = {
//   name: 'Alexa',
//   age:20,
//   method: getName,
// };
// person1.method();
// person2.method();

//in same eg how call and bind useful
//we remove the method 
// function getName(){
//   console.log(this.name);
//   console.log(this.age);
// }
// getName();
// const person1 = {
//   name: 'Alexa',
//   age:12,

// };
// const person2 = {
//   name: 'Alexa',
//   age:20,
// };
// getName.call(person1) // directly invoke
// getName.apply(person1) // directly invoke
// // getName.bind(person1) // return fn so we want to invoke so 
// const newGetName = getName.bind(person1)
// newGetName();


//diff b/w call and apply:--
//if we passing arguments
// console.log('----call() & apply()----')
// function getName(a,b,c){
//   console.log(this.name);
//   console.log(this.age);
//   console.log(a,b,c)
// }
// getName();
// const person1 = {
//   name: 'Alexa',
//   age:12,

// };
// const person2 = {
//   name: 'Alexa',
//   age:20,
// };
// getName.call(person1,'1','2','3')
// getName.apply(person1,['1','2','3']) 

// // person1.method();
// // person2.method();

//in case of bind
//minimal oops concept:
console.log('----bind()----')
class User{
  constructor(){
    this.name = 'Alex John';
  }
  getName(){
    return this.name;
  }
}
const user = new User();

// console.log(user.getName())
const newGetName = user.getName.bind(user);
console.log(newGetName())
//Call & apply Methods-------------
//Call method: used call a fn and argument are passed one-by-one
// functionName.call(thisValue.arg1,arg2,...);

// const person = {name: 'Alex'};

// function greet(greeting){
//   console.log(`${greeting} ${this.name}`);
// }
// greet.call(person,'Hello');

//apply method: just like call,but arguments passed as an array.
// functionName.apply(thisValue, [arg1,arg2,...]);

//bind method : method of fn that create a new fn with a fixed this value.
//syntax: let newFunc = originalFunc.bind(thisArg, arg1,arg2,...);

//OR
/*
console.log('----OR-----')
let name = {
  firstName:"Alex",
  lastName: "John",
  fullName : function(){
    console.log(this.firstName+' '+ this.lastName)
  }
}
//invoke
name.fullName();
//if we add an 1 more object
//so dont repeat the code we use call apply method
let name2 = {
  firstName:'Virat',
  lastName:'Kohli'
}
name.fullName.call(name2);
*/
//seperate method and there is an para
console.log('---sep method for call---')
let name = {
  firstName: 'Alex',
  lastName: 'John',
}
let fullName = function(hometown,state){
  console.log(this.firstName+' '+this.lastName+ ' from ' + hometown + ', ' + state)
}
fullName.call(name, 'Dehradun','Uttarakhand');

let name2 ={
  firstName:'Virat',
  lastName:'Kohli',
}
fullName.apply(name2, ['Mumbai','Maharashtra']); // only diff is []

//bind
let printMyName = fullName.bind(name2,'Mumbai','Maharashtra');
console.log(printMyName);
printMyName();

//practise
console.log('-----practice1-----')
const student = {
  firstName: 'Rahul',
  lastName:'Menon',
}
let details = function(course,university){
  console.log(this.firstName + ' '+ this.lastName+ ' studies ' + course+ ' under ' + university)
}
details.call(student, 'Mathematics', 'calicut university.');
details.apply(student,['Mathematics','calicut university']);
let bindStudent = details.bind(student,'Mathematics','calicut university');
bindStudent()

//2
console.log('-----practice2-----')
const employees ={
  firstName: 'Anjali',
  lastName: 'Pillai',
}
const details1 =function(role,company){
  console.log(this.firstName+' '+ this.lastName+ ' works as '+ role+ ' in '+ company)
}
details1.call(employees,'developer','Vonnue');
details1.apply(employees,['developer','Vonnue']);
let employeesDet = details1.bind(employees,'developer','Vonnue');
employeesDet();

//IMMEDIATELY INVOKED FN EXPRESSION
// runs immediately after its defined
//syntax: 
/**(function(){
 * console.log('I am an IIFE')
 * })();
*/
//usage : we created 2 btn in an html add 2 script.js in diff name we want to merage both of them in this condition we use var outside the function or block so it's accessible everwhere(ie, in any file) so we first created green box is first worked after move to another script red box last value is printed in both box bcz it' global scope that's why we are using IIFE
/*
const runOnce = function(){
  console.log('This will never run again');
};
runOnce();

(function(){
  console.log('This will never run again') // if we no put bracket shown an a error.
  // const isPractise = 23;
})();
// console.log(isPractise);
(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 45;
}
console.log(notPrivate);
*/
//CLOSURE-----------------------------
//Lexical Environment : is the local memory along with the lexical environment of the parent
//here c is lexically inside a and a ia lexically inside the global scope.
//lexical environment: local memory + reffernce to lexical environment of parent, parent- where actually that fn sit inside the code
/*
function a(){
  var b = 20;
   c();
  function c(){
  }
}
a()
console.log(b)
*/
//closure : fn along with lexical scope closure(fn together with refference to its surrounding state)
function parent(){
  var a = 7;
  function inner(){
    console.log(a)
  }
  return parent
}
var z = parent();
console.log(z);
