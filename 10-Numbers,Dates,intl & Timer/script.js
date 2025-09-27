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

//make random integers between 5-15
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