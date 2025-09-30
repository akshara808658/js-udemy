//OOP: is a style of code where we structure programs using objects.
//the class fn basically creates a template that we can use to create objects.
//the constructor method is a special method called when an instance of the class is created

class Bike{

  //Constructor Method
  constructor(model_name, colour, price){
    this.model_name = model_name;
    this.colour = colour;
    this.price = price;
    // console.log('Constructor Method')
  }

  //prototype Method
   bikeDetails(){
      console.log('Bike: ' + this.model_name);
      console.log('colour: ' + this.colour);
      console.log('price: ' + this.price);
   }
   showPrice(){
   console.log(`Price of `+  this.model_name + ' is ' + this.price);
   }
  //Static method : not call using object
  static message(){
    console.log('It is a static method');
  }
}
// let b1 = new Bike()
// b1.model_name = "Hero Splender Plus";
// console.log(b1.model_name);

//Inheritance
//Base Class(Parent) - Bike
//Derived Class(child) - sportsBike 

class SportsBike extends Bike{

}
let b1 = new Bike('Hero Splender Plus', 'Red', 50000);
let b2= new Bike('Honda CB Shine', 'Black', 60000);
let b3 = new Bike('Bajaj Pulsar 150', 'Blue', 70000);

Bike.message() // call using class name

let sb1 = new SportsBike("KTM RC 200", 'Yellow', 80000)

sb1.bikeDetails();

//Key Concept: 
//1-Abstraction: hiding unncessary details and showing only the essentia feature
//2-Encapsulation: keeping properties and methods private inside the class, so they are not accessible outside the class. some methods can be exposed as a public interface(API)
//3-Inheritance : one class(child) can reuse properties and methods of another class (parent);
//4-polymorphism : it allows the same method name to behave differently depending on the object that calls it.

//Prototype method: the prototype contains methods  that are accessible to all objects linked to that prototype

const person = function(firstName , birthYear){
this.firstName = firstName;
this.birthYear = birthYear;
}
const alexa = new person('Alexa',1991);
console.log(alexa);
//1.new {} is created
//2.fn is called, this = {}
//3.{} linked to prototype 
//4.fn automatically return {}

const matilda = new person('Matilda', 2017);
const jack = new person('Jack', 1975);
console.log(matilda, jack);

console.log(alexa instanceof person);
console.log(matilda instanceof person);

//prototype object can inherit from other objects
//prototype:- 
let arr = ['Alexa', 'Arun'];
let object = {
  name: 'Alexa',
  city : 'Dehradun',
  getIntro: function(){
    console.log(this.name + ' from ' + this.city)
  }
}
let object2 = {
  name:'Alex',
}
//Never do this
object2.__proto__ = object;

//CHALLENGE1
const Car = function (make, speed){
  this.make = make;
  this.speed = speed;
}
Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`)
}
Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();