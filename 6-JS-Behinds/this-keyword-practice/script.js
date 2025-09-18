'user strict'

console.log(this);

function calcAge(birthYear){
  console.log(2037-birthYear);
  console.log(this);
}
calcAge(2005);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAgeArrow(2005)

const alexa = {
  year: 1991,
  calcAge: function(){
  console.log(this)
  console.log(2037 - this.year)
}
}
alexa.calcAge();

const mellida ={
  year : 2017,
};
mellida.calcAge = alexa.calcAge;
mellida.calcAge();

const f= alexa.calcAge;
f();

//regular functions and arrow functions 
// var firstName = 'Matilda';

/*
const details = {
  firstName: 'Alexa',
  year:2005,
  calcAge:function(){
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`) //Hey undefined bcz this is a window object. //is show by declare var
  },
}
details.greet();
*/
/*
//can be solve by regular method
const details = {
  firstName: 'Alexa',
  year:2005,
  calcAge:function(){
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: function() {
    console.log(this);
    console.log(`Hey ${this.firstName}`) //Hey Alexa
  },
}
details.greet();

*/

const details = {
  firstName: 'Alexa',
  year:2005,
  calcAge:function(){
    // console.log(this);
    console.log(2037 - this.year);
    //soln 1
    // const self = this;
    // const isMillenial = function(){
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    //soln 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
   
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`) 
  },
}
details.greet();
details.calcAge();

// const addExpr = function(a,b){
//   console.log(arguments);// thsi show index with number
//   return a+b;
// };
// addExpr(2,5);
// addExpr(2,5,8,12)
// var addArrow = (a,b) => {
//   console.log(arguments);
//   return a+b;
// }
// addArrow(2,5,8);


//Memory management primitive vs objects

 //Allocate memory --> Use memory --> Release memory 

 //whenever we assign a value to a new variable, the engine automatically allocates a piece of memory to store the value --> while code is running, the value is written, read, and upadates in the allocated piece of memory-->temp is removed from memory

 //eg:-
//  let temp = 23.7 //--->1
//  temp = temp + 5 //-->2
//  round(temp)
//ALLOCATE MEMORY
 //PRIMITIVE :Number, String , Boolean , Undefined , Null , Symbol, Bigint
 //OBJECTS : Objects literals, Arrays, Functions,...
 //callstack:fn excuted and heap: object stored
 //Objects stored in HEAP
 //primitive values are stored in CALL STACK

 //eg:-
 /*
 const name = 'Alen';
 const age = calcAge(2005);
 let newAge = age;
 newAge++;
  
 const location ={
  city:'Faro',
  country:'portugal',
 }

 const newLocation = location;
 newLocation.city = 'Lisbon';

 console.log(location);
  
 function calcAge(birthYear){
  const now=2037;
  const x = now - birthYear;
  return x;
 }
 */
 //calstack:-
 /**
  * now = 2037 // then the fn returns and pop of the stack
  * x = 46
  */
 // /**name =
 //    age = 
 //    newAge = 
 //    location = 
 //    newLocation =
 //    calcAge = 
 //  */

 //HEAP: object are stored  and fn
 /**
  * city =
  * country = 
  */

 //Object reffernces practise

 const jessica1 = {
  firstName :'Jessica',
  lastName : 'Williams',
  age: 27,
 };

 function marryPerson(originalPerson,newLastName){
   originalPerson.lastName = newLastName;
   return originalPerson;
 }
 const marriedJessica = marryPerson(jessica1, 'Davis')

//  const marriedJessica = jessica;
//  marriedJessica.lastName = 'Devis';

 console.log('Before:',jessica1);//same as after
 console.log('After:', marriedJessica);
 
const jessica ={
  firstName: 'Jessica',
  lastName: 'Williams',
  age : 27,
  family: ['Alice', 'Bob']
};
 
const jessicaCopy ={...jessica};
jessicaCopy.lastName = 'Davis';

// console.log(jessica, jessicaCopy);
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push("John");

//Deep clone 
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Mary");
jessicaClone.family.push("John");

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);

