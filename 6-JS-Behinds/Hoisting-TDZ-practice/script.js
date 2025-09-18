'user strict'
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Alexa' // undefined
let job = 'teacher'
const year = '2005'

//Functions
console.log(addDecl(2,3));
// console.log(addExpr(3,5));//refference error
//console.log(addArrow(4,6));//unsing var this like undefined(4,6) so type error appear

function addDecl(a,b){
  return a+b;
}
//fn expression 
const addExpr = function(a,b){
  return a+b;
}
//arrow
var addArrow = (a,b) => a+b

//EXAMPLE
if(!numProducts) deleteShoppingCart()

var numProducts = 10;

function deleteShoppingCart(){
  console.log(`All products deleted!`);
}

var x=1;
let y= 2;
const z=3

console.log(x === window.x); //true
console.log(y === window.y);//false
console.log(z === window.z);//false

//This keyword : special variable that is created for every execution context 
//this is not static it depends on how the fn is called, and its value is only assigned when the fn is actually called.

//eg
const jonas = {
  name: 'Alexa',
  year: 2004,
  calcAge: function(){
    return 2037 - this.year
  }
}
jonas.calcAge(); //48
