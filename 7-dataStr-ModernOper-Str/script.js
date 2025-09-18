/*
const restaurent ={
  name: 'Classico Italiano',
  location : 'Via Angelo Tavant 23, Firenze, Italy',
  categories : ['Italian', 'pizzeria', 'vegetarin', 'Organic'],
  starterMenu :['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
  mainMenu: ['Pizza','Pasta','Risotto'],
  order : function(starterIndex,mainIndex){
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex]
  }
};

const arr = [2,3,4];
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

// const [first, second] = restaurent.starterMenu
// console.log(first,second);

let [main, secondary] = restaurent.starterMenu
console.log(main,secondary); //Focaccia Bruschetta

    /* Switching variable
    const temp = main;
    main = secondary;
    secondary = temp;
    console.log(main,secondary); // Bruschetta Focaccia
    */
/*
[main,secondary] = [secondary, main]; //same as before 
console.log(main, secondary);

// console.log(restaurent.order(2,0)) //pizza
//reset

//Receive 2 return values from a function 
const [starter, mainCourse] = restaurent.order(2,0)
console.log(starter, mainCourse);

//nesterd distructuring
const nested = [2,4,[5,6]];
// const [i, ,j] = nested
// console.log(i, j); //[ 5, 6 ]

const [i, ,[j,k]] = nested;
console.log(i,j,k);

//Default values
const [p,q,r] = [8,9]
console.log(p,q,r); // 8 9 undefined

*/

//PRACTICE
//1:Destructure the books array into two variables called firstBook and secondBook.
const book = ['book1','book2','book3','book4']

const [firstBook, secondBook] = book;
console.log(firstBook, secondBook);

//2 :Destructure the books array into a variable called thirdBook. You must skip the first two books.
const [ , , thirdBook] = book;
console.log(thirdBook);
//3-Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.


const restaurent ={
  name: 'Classico Italiano',
  location : 'Via Angelo Tavant 23, Firenze, Italy',
  categories : ['Italian', 'pizzeria', 'vegetarin', 'Organic'],
  starterMenu :['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
  mainMenu: ['Pizza','Pasta','Risotto'],
  order : function(starterIndex,mainIndex){
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex]
  },
 ratings : [4.19,144584]
};

const [rating, ratingsCount] = restaurent.ratings
console.log(rating);
console.log(ratingsCount);


