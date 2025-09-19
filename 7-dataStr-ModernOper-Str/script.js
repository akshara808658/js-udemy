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
*/

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
