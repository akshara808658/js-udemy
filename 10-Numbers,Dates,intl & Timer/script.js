//consverting & checking Number
console.log(23 === 23.0) //true

//remove decimal like 0.300000004 using Number
console.log(0.1+0.2); //0.30000000000000004
console.log(0.1+0.2 === 0.3); //false

//conversion
console.log(Number('23')) // convert to no
console.log(+'23') // easier way to convert to no

//parsInt : convert string into integer : remove extra space and remove extra el other than no only if it start in number
console.log(Number(parseInt('30px',10))) // 30 , second one redix that is base 10
console.log(Number(parseInt('e30px'))) //NaN


//perseFloat: using for floating point number 
console.log(Number.parseFloat(' 2.5rem'));

//check if value NaN
//isNaN : trur- not-a-no, false: value is a num
console.log(Number.isNaN(23));//f
console.log(Number.isNaN('20'));//f
console.log(Number.isNaN(+'23x'));//t
console.log(Number.isNaN(23 / 0));//f : infinity
console.log(isNaN('hey'));//t

//checking if value is number
console.log(Number.isFinite('20'));//f
console.log(Number.isFinite(20));//t
console.log(Number.isFinite(+'20x'));//f
console.log(Number.isFinite(23 / 0)) //f

//test integer : not work in teminal
// console.log(Number.isInteger(23));//t
// console.log(Number.isInteger(23.0));//t
// console.log(Number/isInteger(23 / 0));//f

//math squre root : Math.sqrt
console.log(Math.sqrt(49));//7
console.log(49 ** (1/2));

//maximum value : Math.max
console.log(Math.max(1.2,3,0,'5.0',4.9,4)); //5
console.log(Math.max(1.2,3,0,'5.0px',4.9,4)); //NaN

console.log(Math.min(1.2,3,0,'5.0',4.9,4)); //0

console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

//for generating random no Math.random
console.log(Math.random() * 6); //4.535096299747503
console.log(Math.trunc(Math.random() * 6) + 1) // trunc: using remove decimal part

//random no making min to max
const randomInt = (min,max) => 
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10,20));

//rounding intergers
console.log(Math.trunc(23.3));//23

console.log(Math.round(23.3));//23
console.log(Math.round(23.9));//23

console.log(Math.ceil(23.3)); //24 -up
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23 -down
console.log(Math.floor('23.9')); //23
//-ve
console.log(Math.trunc(-23.3)); //-23 
console.log(Math.floor(-23.9)); //-24
console.log(Math.ceil(-23.3)); //-23 
console.log(Math.round(-23.9)); //-24

//round decimals
console.log((2.75435).toFixed(0))//3 , not number
console.log((2.75435).toFixed(3))//2.754 ,not number
console.log((2).toFixed(7))//2.0000000, not number
console.log(+(2.7).toFixed(8)) // 2.7 & number

//convert the string ' 45.67px ' into a floating point number
const result = Number.parseFloat('45.67px');
console.log(isFinite(result));

//round the number 7.856
console.log(Math.round(7.500)); //8 - correct round
console.log(Math.ceil(7.356));//8 - up
console.log(Math.floor(7.856));//7 - down
console.log(Math.trunc(7.856));//7 - remove decimal

//make random integers between 10-20
const random = (min, max) => 
  Math.trunc(Math.random()* (max-min + 1)) + min;
console.log(random(10,20));

// rounding decimals
console.log(+(3.14159265).toFixed(3))

//maximum & min
console.log(Math.max(12,45,7,89,34,'500'));
console.log(Math.min(12,45,7,89,34,'50'));

//calculate square root of 144
//calculate 5 ^ 3
console.log(Math.sqrt(144));
console.log(5 ** 3)

//remainder operators
console.log(5 % 2) //1
console.log(5 / 2) //  2.5

console.log(8 % 3) // 2
console.log(8 / 3) // 2.666

//Numeric seperators : 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);
console.log(Number('1_500')); //NaN
console.log(parseInt('1_500')); //1

//BigInt : use bigInt whenever you need integers larger tan Number,MAX_SAFE_INTEGER or need exact precision for huge no.s
//usage: security, working with very large integers
//write: add an 'n' at the end of an integer
console.log(2 ** 53 -1) //9007199254740991
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(2 ** 53 +1) //9007199254740992

console.log(546357682371793341241341232716) // cannot display accurately so use n at end

console.log(546357682371793341241341232716n)

//operations
console.log(100000000000000n + 100000000000000000n);

//cannot work operation with regular number
// const huge = 76474716482739799072n;
// const num = 12;
// console.log(huge + num) //error

//
console.log(20n > 15) // true
console.log(20n === 20) // false
console.log(typeof 20n) // bigint

//Division
console.log(10n/ 3n); // 3n : remove decimal part
console.log(10/3) // 3.333

//Creating Dates
const now = new Date();
console.log(now);

console.log(new Date('December 24, 2025'));
console.log(new Date(2025, 1, 29)); // march 1 bcz auto correct date

console.log(new Date(0)) // jan 01 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000)) // jan 4 bcz after 3 days

//working with dates
const future = new Date(2037,10,19,15,23)
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142237180000)); // same date as future

//we want day difference 
const calcDaysPassed = (date1, date2) => 
  Math.abs(date1 - date2) / (1000 * 60* 60 * 24); // abs add removing -ve 

const days1 = calcDaysPassed(new Date(2037,3,4), new Date(2037, 3, 14, 10, 8));
console.log(days1);

//International Dates(intl)
const nows = new Date();
console.log(new Intl.DateTimeFormat('en-US').format(nows)); // US: 9/29/2025
console.log(new Intl.DateTimeFormat('en-GB').format(nows)); // UK: 29/09/2025
console.log(new Intl.DateTimeFormat('de-DE').format(nows)); //Germany : 29.9.2025
console.log(new Intl.DateTimeFormat('hi-In').format(nows)); //India: 29/09/2025

//
const date = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day : 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long'
}
console.log(new Intl.DateTimeFormat('en-IN', options).format(date));

//Internationlizing numbers
const num = 3884764.23;
const option = {
  style:'currency',
  unit:'celsius',
  currency: 'INR',
};
console.log('US: ', new Intl.NumberFormat('en-US',option).format(num)); //US:  3,884,764.23
console.log('INDIA: ', new Intl.NumberFormat('en-IN',option).format(num)); // INDIA:  38,84,764.23
console.log('Syria: ', new Intl.NumberFormat('ar-SY',option).format(num)); //Syria:  ٣٬٨٨٤٬٧٦٤٫٢٣

//Timers: SetTimeout & SetInterval
const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout((ing1,ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),2000, ...ingredients);
console.log('waiting...');

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
// setInterval(function(){
//   const now = new Date();
//   console.log(now)
// }, 3000);

//practise
//convert string into no and only integers
console.log(Number(parseInt('123.45px')))

//check isNaN & isFinite
console.log(Number.isNaN('hello')) //f
console.log(Number.isFinite('hello'))//f
console.log(Number.isNaN(23 / 0)); //f
console.log(Number.isFinite(23 / 0)); //f
console.log(Number.isNaN(+'45px')); // t
console.log(Number.isFinite(+'45px'));//
console.log(Number.isNaN(67)); //f
console.log(Number.isFinite(67)) //t

//find largest no & min
console.log(Math.max(12,'34',7.8,'54px',90)); //NaN
console.log(Math.min(12,'34',7.8,'54px',90));//NaN

const arr = [12,'34',7.8,'54px',40];
const cleanArr = arr.map(Number).filter(n => !isNaN(n));

console.log(Math.max(...cleanArr)); //90;
console.log(Math.min(...cleanArr)); // 7.8

//random nos : rolling dice
function rollDice(){
 console.log(Math.trunc(Math.random() * 6 )+ 1);
}
rollDice()

//
console.log(Math.round(7.856))// 8;
console.log(Math.ceil(7.856));//8
console.log(Math.floor(7.856)); // 7
console.log(Math.trunc(7.856)); // 7

//BigInt
const large = 100000000000000000000n;
const sLarge = 9007199254740991n;

console.log(large+sLarge);
console.log(large / 3n);
console.log(100000000000000000000 === large)

//Dates : create December 25, 2025, 10.30AM
const christmas = new Date(2025,11,25,10,30);
console.log(christmas);
//

const calcDaysPassed1 = (dateOne, dateTwo) => 
  Math.abs(dateOne - dateTwo) / (1000 * 60 * 60 * 24);

const days = calcDaysPassed1(new Date(2037, 3, 4), new Date(2037, 3, 14, 10, 8));
console.log(days); 

//today date in different locales
const dates = new Date();
const option1={
year:'numeric',
month:'long',
day:'2-digit',
hour:'numeric',
minute:'numeric'
}
console.log(new Intl.DateTimeFormat('en-IN', option1).format(dates));
console.log(new Intl.DateTimeFormat('en-US', option1).format(dates));
console.log(new Intl.DateTimeFormat('en-GB', option1).format(dates));
console.log(new Intl.DateTimeFormat('en-DE', option1).format(dates));

//
console.log(Math.trunc(Math.random()*6) + 1)

//
const randomNum = (min, max) => 
  Math.trunc(Math.random()* (max-min+1)) + min;
console.log(randomNum(5,15))
//
console.log(+(3.14156757).toFixed(3));