'use strict'
// /*
// const restaurent ={
//   name: 'Classico Italiano',
//   location : 'Via Angelo Tavant 23, Firenze, Italy',
//   categories : ['Italian', 'pizzeria', 'vegetarin', 'Organic'],
//   starterMenu :['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
//   mainMenu: ['Pizza','Pasta','Risotto'],
//   order : function(starterIndex,mainIndex){
//     return this.starterMenu[starterIndex], this.mainMenu[mainIndex]
//   }
// };

// const arr = [2,3,4];
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x,y,z] = arr; // distructuring an array
// console.log(x,y,z);
// console.log(arr);

// // const [first, second] = restaurent.starterMenu
// // console.log(first,second);

// let [main, secondary] = restaurent.starterMenu
// console.log(main,secondary); //Focaccia Bruschetta

//     /* Switching variable
//     const temp = main;
//     main = secondary;
//     secondary = temp;
//     console.log(main,secondary); // Bruschetta Focaccia
//     */
// /*
// [main,secondary] = [secondary, main]; //same as before 
// console.log(main, secondary);

// // console.log(restaurent.order(2,0)) //pizza
// //reset

// //Receive 2 return values from a function 
// const [starter, mainCourse] = restaurent.order(2,0)
// console.log(starter, mainCourse);

// //nesterd distructuring
// const nested = [2,4,[5,6]];
// // const [i, ,j] = nested
// // console.log(i, j); //[ 5, 6 ]

// const [i, ,[j,k]] = nested;
// console.log(i,j,k);

// //Default values
// const [p,q,r] = [8,9]
// console.log(p,q,r); // 8 9 undefined

// */

// //PRACTICE
// //1:Destructure the books array into two variables called firstBook and secondBook.
// const book = ['book1','book2','book3','book4']

// const [firstBook, secondBook] = book;
// console.log(firstBook, secondBook);

// //2 :Destructure the books array into a variable called thirdBook. You must skip the first two books.
// const [ , , thirdBook] = book;
// console.log(thirdBook);
// //3-Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
// /*

// const restaurent ={
//   name: 'Classico Italiano',
//   location : 'Via Angelo Tavant 23, Firenze, Italy',
//   categories : ['Italian', 'pizzeria', 'vegetarin', 'Organic'],
//   starterMenu :['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
//   mainMenu: ['Pizza','Pasta','Risotto'],
//   order : function(starterIndex,mainIndex){
//     return this.starterMenu[starterIndex], this.mainMenu[mainIndex]
//   },
//  ratings : [4.19,144584]
// };

// const [rating, ratingsCount] = restaurent.ratings
// console.log(rating);
// console.log(ratingsCount);

// //4-Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = restaurent.ratings;
// console.log(threeStarRatings);

// */
// const restaurent ={
//   name: 'Classico Italiano',
//   location : 'Via Angelo Tavant 23, Firenze, Italy',
//   categories : ['Italian', 'pizzeria', 'vegetarin', 'Organic'],
//   starterMenu :['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
//   mainMenu: ['Pizza','Pasta','Risotto'],
//   openingHours:{
//     thus:{
//       open:12,
//       close:22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close:24,
//     },
//   },
//   order : function(starterIndex,mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };
// //object distructuring
// const {name, openingHours, categories} = restaurent;
// console.log (name, openingHours,categories);
/*
//Destructuring
const arr = [1,2,3]
const [x,y,z] = arr;
console.log(x,y,z);
//
const restaurent ={
  name: 'Classico Italiano',
  location : 'Via Angelo Tavant 23, Firenze, Italy',
  categories : ['Italian', 'pizzeria', 'vegetarin', 'Organic'],
  starterMenu :['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
  mainMenu: ['Pizza','Pasta','Risotto'],

  order : function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};
//DESTRUCTURING OF ARRAY
const [first, , ,second] = restaurent.categories // we get first and third el bcz we skip the space, Italian Organic
console.log(first,second);

//switch
let [main, secondary] = restaurent.mainMenu
console.log(main,secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main,secondary] = [secondary,main];
console.log(main,secondary);

//Recieve 2 return  values from a fn
const[starter,mainCourse] = restaurent.order(2,0);
console.log(starter,mainCourse);

const nested = [2,4,[5,6]];
// const[i, ,  j] = nested; // 2,[5,6]
// console.log(i,j);

const [i, ,[j,k]] = nested;
console.log(i,j,k);

//Default values
// const [p,q,r] = [8,9];
// console.log(p,q,r);
//OR
const [p=1,q=1,r=1] = [8];
console.log(p,q,r);
*----------------------------------------------------------------/
/*
//DESTRUCTURING OF OBJECT
const restaurent ={
  name: 'Classico Italiano',
  location : 'Via Angelo Tavant 23, Firenze, Italy',
  categories : ['Italian', 'pizzeria', 'vegetarin', 'Organic'],
  starterMenu :['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
  mainMenu: ['Pizza','Pasta','Risotto'],
  openingHours: {
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:11,
      close:23,
    },
    sat:{
    open:0,//open 24 hours
    close:22,
    },
  },

  order : function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function({starterIndex = 1, mainIndex =1, time = '20:00', address}){
    console.log(`Order recevied ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
//Rest pattern and rest parameters
//SPREAD because on RIGHT side of =
const arr = [1,2,...[3,4]];

//REST because on RIGHT side of=
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others);

const [Pizza, ,risotto, ...otherFood] = [...restaurent.mainMenu, ...restaurent.starterMenu]
console.log(Pizza,risotto,otherFood);

//OBJECTS
 const{sat, ...weekdays} = restaurent.openingHours;
 console.log(weekdays);
 
 //2 FUNCTION
 const add= function(...numbers){
  let sum =0;
  for(let i =0; i<numbers.length; i++)
    sum += numbers[i]
    console.log(sum);
 }
add(2,3)
add(5,3,7,2);
add(8,2,5,3,2,1,4)

const x = [23,5,7]
add(...x)

restaurent.orderPizza('mushroom','onion','olivers','spinach');
restaurent.orderPizza('mushroom')
/*
restaurent.orderDelivery({
  time:'22:30',
  address:'Via del sole, 21',
  mainIndex:0,
  starterIndex:3,
})
restaurent.orderDelivery({
  address:'Via del Sole, 21',
  starterIndex: 1,
});
const {name,openingHours, categories,mainMenu} = restaurent;
console.log(name,openingHours,categories,mainMenu);

const {name: restaurentName,openingHours: hours, categories: tags} = restaurent;
console.log(restaurentName,hours,tags);

//Default values
const {menu = [],starterMenu: starters = []} = restaurent;
console.log(menu,starters);//[] staterMenu

//Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b:7,c:14};
({a,b} = obj)
console.log(a,b);

//nested object
// const {sat: {open,close}} = openingHours;
// console.log(open,close);
const{
  fri:{open: o, close: c},
 } = openingHours;
 console.log(o,c);
 

 //Spread Operators
 const arr= [7,8,9];
 const badNewArr = [1,2,arr[0],arr[1],arr[2]];
 console.log(badNewArr);//[1,2,7,8,9]
 
 const newArr =[1,2,...arr]
 console.log(newArr);//[1,2,7,8,9]

 console.log(...newArr);//12789
console.log(1,2,7,8,9);

const newMenu = [...restaurent.mainMenu,'Gnocci'];
console.log(newMenu);
//copy array
const mainMenuCopy = [...restaurent.mainMenu]
console.log(mainMenuCopy);

//join 2 arrays
const menus = [...restaurent.starterMenu, ...restaurent.mainMenu]
console.log(menus);

//Iterables: arrys,strings,maps,sets,NOT objects
const str = 'Jonas';
const letters = [...str, '','S.'];
console.log(letters);

//orderPasta
const ingreadients =[
  prompt("let's make pasta!  Ingredient 1?"),
  prompt("let's make pasta!  Incredient 2?"),
  prompt("let 's make pasta! Incredient 3?")
]
console.log(ingreadients);

restaurent.orderPasta(ingreadients[0],ingreadients[1],ingreadients[2])
restaurent.orderPasta(...ingreadients);

//Objects
const newRestaurent = {founderIn: 1998, ...restaurent,founder:'Guiseppe'};
console.log(newRestaurent);

//changing name of resturant
const restaurentCopy = {...restaurent};
restaurentCopy.name = 'Restorent Roma';
console.log(restaurentCopy.name);//after
console.log(restaurent.name); //before

*/
/*
//short circuting (&& and ||)
//Use any data type, return any data type
console.log('---OR---');

console.log(3 || 'Jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello

restaurent.numGuests  = 23;
const guests1 = restaurent.numGuests ? restaurent.numGuests : 10;
console.log(guests1);

const guests2 = restaurent.numGuests || 10
console.log(guests2);

console.log('---AND---');
console.log(0 && 'jonas');// falsy
console.log(7 && 'jonas'); // both true

console.log('Hello' && 23 && null && 'jonas'); //null - falsy

if(restaurent.orderPizza) {
  restaurent.orderPizza('mushroom','spinach')
}
restaurent.orderPizza && restaurent.orderPizza('mushroom','spinach')

*/
/*
//Nullish Collescing Operator(??)
restaurent.numGuests = 0;
const guests = restaurent.newGuests || 10;
console.log(guests);

//Nullish null and undefined (NOT 0 or '')
const guestCorrect = restaurent.numGuests ?? 10;
console.log(guestCorrect)

//Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name:'La Piazza',
  owner: 'Glovanni Rossi',
};
//OR assignment operators
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

//nullish assignment operators
rest1.numGuests ??= 10
rest2.numGuests ??= 10

//assignment operators
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANOYMOUS>'
rest2.owner &&= '<ANOYMOUS>'

console.log(rest1);
console.log(rest2);
*/
/*
//Looping arrays 
const restaurent ={
  name: 'Classico Italiano',
  location : 'Via Angelo Tavant 23, Firenze, Italy',
  categories : ['Italian', 'pizzeria', 'vegetarin', 'Organic'],
  starterMenu :['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
  mainMenu: ['Pizza','Pasta','Risotto'],
  openingHours: {
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:11,
      close:23,
    },
    sat:{
    open:0,//open 24 hours
    close:22,
    },
  },

  order : function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function({starterIndex = 1, mainIndex =1, time = '20:00', address}){
    console.log(`Order recevied ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//for of loop

const menu = [...restaurent.starterMenu, ...restaurent.mainMenu];

for(const item of menu) console.log(item);

for (const [i,el] of menu.entries()){ // const item of menu
  // console.log(`${item[0]+1}: ${item[1]}`);
  console.log(`${i+1}: ${el}`);
}
// console.log(...menu.entries());

//Enhanced Object Literals

*/
//--------------------------------------PRACTISE----------------------------------
//DISTRUCTURING
//this is js feature that allows you to extract values from objects or arrays into distinct variables. 
//usage: REMOVE ADS,array distructuring
//syntax
/*
let {firstName, lastName} = person;
let [firstName, lastName] = person;
*/

//object distructuring
//eg:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age:23
};

//Destructring 
let {firstName, lastName} = person;

//string destructuring
let name = 'Alexa';

//Destructuring
let [a1,a2,a3,a4] = name;

//spread operators:
/**
 * allows us to quickly copy all or part of an existing array or object into another array.
 * spread opertors expands an like an array into more elements.
 * spread operators(...); ...operator can be used to join arrays. 
*/
//eg
const num1 = [1,2,3];
const num2 = [4,5,6];
const numbers = [...num1,...num2];
console.log(numbers);

//assign first and second items 
const nums = [1,2,3,4,5,6];

const [one,two,...rest] = nums
console.log(one,two,rest);

//combine two objects
const car ={
  brand: 'Ford',
  model: 'Mustang',
  color:'Black'
}
const moreCar = {
  type: 'Car',
  year: 2021,
  color:'yellow'
}
const newCar = {...car,...moreCar}; // using '{}'
console.log(newCar);
//
const resto = {
  mainMenu : ['Pizza', 'Biriyani','Mandi','Dosa'],
  starterMenu: ['Juice', 'Soap', 'shake'],
  openHours: {
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:11,
      close:23,
    },
    sat: {
      open:0,
      close:24,
    },
  },
orderPizza: function (mainIngredient,...otherIngredient){
  console.log(mainIngredient);
  console.log(otherIngredient);
},
// numGuests : 0
};
const [pizza,Biriyani,...other] = [...resto.mainMenu, ...resto.starterMenu]
console.log(pizza,Biriyani,other);

//for getting weekdays
const {sat, ...weekdays} = resto.openHours;
console.log(weekdays);

//fn distructuring
function add(...n){
let sum = 0;
for(let i=0; i< n.length; i++) sum += n[i];
console.log(sum);
}
add(2,4);
add(4,6,8);
add(3,6,8,9,6,5);

const x = [1,0,7];
add(...x);

//order
resto.orderPizza('mashroom','onion','spanich', 'olivers');
resto.orderPizza('mushroom');

// Short circuting (&& and ||)
//which one is first truthy that is the result 
console.log(3 || 'Alexa'); //3
console.log('Alexa' || 6);// alexa
console.log('' || 'Alexa'); //  alexa
console.log((true || 0)); // true
console.log(undefined || null); //null

console.log(undefined || 0 || 'Hello' || 23 ); // Hello

const guests1 = resto.numGuests ? resto.numGuests : 10; // if numGuest is 0 then result is 10
console.log(guests1);

console.log('---AND---');
console.log(0 && 'Alexa');//0
console.log('Alexa' && 0 );//0
console.log(3 && 4); // 4 :- both of them true then result is last truth value 
console.log('Alexa' && 'Arun'); //arun

console.log('Hello' && 34 && null && 'Jonas'); //null

//Nullish Coallescing operator(??) : nullish and undefined (Not 0 or '')
//return right-hand side operand when its left-hand side operand is null or undefined otherwise return its left -hand side operand
//leftExpr ?? rightExpr
const guestCorrect = resto.numGuests ?? 10;
console.log(guestCorrect);

const foo = null ?? 'default string'
console.log(foo); // default string 

const baz = 34 ?? 0
console.log(baz); //34 :- left

//Logical assignment operator
//  (||) : x || y if x is falsy,assign y to x
const rest1 = {
  name : 'Capri',
  numGuests: 20,
};
const rest2 ={
  name: 'La Pizza',
  owner : 'Giovanni Rossi',
};
// rest1.numGuests = rest2.numGuests || 10
// rest2.numGuests = rest1.numGuests || 10
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//here also use nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??=10;

// rest1.owner = rest1.owner && '<ANONYMOUS>' // falsy so undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>' // RIGHT HAND BCZ &&
rest1.owner &&= '<ANOYMOUS>' // more better
rest2.owner &&= '<ANOYMOUS>'

console.log(rest1);
console.log(rest2);

//Looping Arrays
const menu = [...resto.starterMenu, ...resto.mainMenu];
console.log(menu);

for(const item of menu) console.log(item);

// for (const item of menu.entries()){
//   // console.log(item);//0,1,..:-index
//   console.log(`${item[0]+1}: ${item[1]}`);
// }
//if wnat to change the variable name item
for(let [i,el] of menu.entries()){ // menu.entries gives index and value
  console.log(`${i+1}: ${el}`);
}
// console.log([...menu.entries()]);

//Enhanced object literal 
//When a variable's name is the same as the desired property name in an object literal, the property name can be omitted. The variable's value is then automatically assigned to a property with the same name.
//* wriding methods : dont write the fn 
/*
//without shorthand
const personOld = {
  name:name,
  age:age,
};
//with shorthand
const personEnhanced = {name,age};

//fn
    // Without shorthand
    const objOld = {
      greet: function() {
        console.log("Hello!");
      }
    };

    // With shorthand
    const objEnhanced = {
      greet() {
        console.log("Hello!");
      }
    };'

    */
   //eg
   //firstly put openting hourse in next obj 
   //then add opening hourse in resto1 
  const weekday = ['mon','tue','wed','thu','fri','sat','sun'];
  const openHours = {
    [weekday[3]]:{   // so thu: replace 
      open:12,
      close:22,
    },
    [weekday[4]]:{ // fri
      open:11,
      close:23,
    },
    [weekday[5]]: { //sat
      open:0,
      close:24,
    },
  }; 

const resto1 = {
  mainMenu : ['Pizza', 'Biriyani','Mandi','Dosa'],
  starterMenu: ['Juice', 'Soap', 'shake'],

orderPizza(mainIngredient,...otherIngredient){ // avoid function by enhance method
  console.log(mainIngredient);
  console.log(otherIngredient);
},
// numGuests : 0
// openHours:openHours, // property name and variable name are same then use enhance method
  openHours,
};    

//optional chaining(?.)
//Prevents errors when accessing properties that might not exist.
// If the property does not exist → returns undefined instead of error.
//we want to know mon open or not
if(resto.openHours && resto.openHours.mon) console.log(resto.openHours.mon.open);

//
// console.log(resto.openHours.mon.open); // ERROR

//with optional chaining
console.log(resto.openHours.mon ?.open);//undefined
console.log(resto.openHours.fri ?.open); // 11

//Eg
const days = ['mon','tue','wed','thu','fri','sat','sun'];
for(const day of days){
  console.log(day);
  // const open = resto.openHours[day] ?.open || 'Closed'; // in here sat is closed but actually 24 hrs
  // || treats 0, '', false as falsy.
  // ?? only treats null or undefined as empty.
  const open = resto.openHours[day] ?.open ?? 'Closed'; // so nullish opertor
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(resto.order?.(0,1) ?? 'Methods does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.com'}];

console.log(users[0] ?.email ?? 'User array empty');

if(users.length > 0) console.log(users[0].name);
else console.log('user array empty');

//looping object , object key, values, and entries

const properties = Object.keys(openHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days`;

for(const day of properties){
  openStr += ` ${day},`;
}
console.log(openStr);

//property VALUES
const values = Object.values(openHours);
console.log(values);

//Entire object
const entries = Object.entries(openHours);
// console.log(entries);

// for(const x of entries){
//   console.log(entries);
// }

// [key,values]
for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
//
/*
const properties = Object.keys(openHours);  // keys (mon, tue...)
const values = Object.values(openHours);    // values ({open, close})
const entries = Object.entries(openHours);  // [key, value]

Object.keys(obj) → array of keys.
Object.values(obj) → array of values.
Object.entries(obj) → array of [key, value].
*/

//SETS : collection of unique values
//help avoid duplication
//const ver = new Set()
//has - existance
//add-for adding, delete:- removing, clear:- remove all element, 
const orderSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza']);
console.log(orderSet);
//in string
console.log(new Set('akshara'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear()
console.log(orderSet);

for(const order of orderSet) console.log(order);

//Eg
const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
console.log([...new Set(staff)]);
console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);

//new operation make set useful---------------------------

const italianFood = new Set(['pasta','gnocchi','olive oil','garlic','tomoatos']);
const mexicanFood = new Set (['beans','rice','garlic','avocado','tomoatos']);

const commonFoods = italianFood.intersection(mexicanFood)
// console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

//union method
const italianMexicanFusion = italianFood.union(mexicanFood);
console.log([...italianMexicanFusion]);

// console.log(new Set([...italianFood,...mexicanFood])); // Set
console.log([...new Set([...italianFood,...mexicanFood])]); // Array

//
const uniqueItalianFoods = italianFood.difference(mexicanFood)
console.log([...uniqueItalianFoods]);

const uniqueMexicanFood =italianFood.difference(mexicanFood)
console.log([...uniqueMexicanFood]);

const uniqueItalianAndMexicanFoods = uniqueItalianFoods.symmetricDifference(uniqueMexicanFood)
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFood.isDisjointFrom(mexicanFood));

//MAP FUNDAMENTALS
const reset = new Map();
reset.set('name', 'Alexa');
reset.set(1,'Firenze, Italy');
reset.set(2,'Lisbon, Portugal');


reset
.set('categories',['Italian', 'pizzeria', 'vegetarin', 'Organic'])
.set('open',11)
.set('close',23)
.set(true, 'We are open :D')
console.log(reset);

console.log(reset.get('name'));

const time = 21;
reset.get(time > reset.get('open') && time < reset.get('close'))

console.log(reset.has('categories'));
reset.delete(2);
console.log(reset);
// reset.clear()
console.log(reset.size);
