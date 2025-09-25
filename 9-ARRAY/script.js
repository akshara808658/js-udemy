// 'use strict'
// //ARRAY METHODS
// //push():add element to the end
// let a = [1,2,3];
// a.push(4);
// console.log(a) // [1,2,3,4]


// //pop():remove the last element
// a.pop();
// console.log(a) //[1,2,3]

// //shift():remove the first element
// a.shift();
// console.log(a);//[2,3]

// //ushift:add the first element
// a.unshift(1);
// console.log(a); //[1,2,3]

// //splice(start,deleteCount,..items): adds or removes or replace elements: 
// a.splice(1,1,'x');
// console.log(a) // [1,x,3]

// //sort(): sort array(alphabetically by default)
// let b = [7,3,0];
// let c=['x','o','a'];
// b.sort();
// a.sort();
// c.sort();
// console.log(b); //[0,3,7]
// console.log(a);//[1,3,x]
// console.log(c); //[a,o,x]

// //reverse: reverse array order
// let r = [1,2,3,0];
// r.reverse();
// console.log(r); //[0,3,2,1]

// //fill(value,start,end): fills array with given value
// let f = [2,3,5,8,0,7,9];
// f.fill(0,0,2);
// console.log(f) // [0,0,5,8,0];

// //ACCESSOR METHOD
// //concat : merges array into new array
// let a1 = [1,2];
// let b1 = [3,4];

// console.log(a1.concat(b1));

// //includes(): check if the value is exist 
// console.log([1,2,3].includes(1));

// //join() : convert to string
// console.log([1,2,3].join('-'))

// //slice(start,end): extract part into new array
// let arr = [9,2,4,1,2,3,7,7,8];
// console.log(arr.slice(3,6)); // extract [1,2,3];

// //toString() : convert array to string
// console.log([1,2,3].toString());

// //toLocalString() : convert to localized string
// console.log([1000].toLocaleString('en-IN'));

// //forEach() : runs a fn on each element
// [1,2].forEach(x => console.log(x)); 

// //map() : create new array with tranformed values
// console.log([1,2,3].map(x => x*2));

//practise
let arr1 = [2,4,6,7,8,8]
console.log(arr1.slice(2,4)) // 6,7
console.log(arr1.slice(-2))//8,8
console.log(arr1.slice(1,-2)) // 4,6,7
console.log([...arr1])

//splice
console.log(arr1.splice(-1));
console.log(arr1);

//reverse
const arr2 = ['a','b','c','d'];
console.log(arr2.reverse());

//concat
const letters = arr1.concat(arr2);
console.log(letters)
console.log([...arr1, ...arr2]) // same as concat

//join
console.log(letters.join('-'));

//sort
const arr3 = [10,3,5,0,9,7];
arr3.sort((a,b) => b-a);
console.log(arr3) // dece: [10,9,7,5,3,0]
const arr4 = ['o','z','x','a','y'];
console.log(arr4.sort()) // a,o,x,y,y

//at method for current index element
const arr5 = [23,11,64];
console.log(arr5[0]) //23
console.log(arr5.at(0)) //23

//getting last array element
console.log(arr5[arr5.length-1]) //64
console.log(arr5.slice(-1)[0]);
console.log(arr5.at(-1))

console.log('Alexa'.at(0));
console.log('Alexa'.at(-1));

//Looping arrys:ForEach
const movements = [200,450,-400,3000,-650,-130,70,1300];
// for(const move of movements){ // without entries like movement 1: 
for (const [i,move] of movements.entries()){
  if(move > 0){
    console.log(`Movement ${i+1}: You deposited ${move}`)
  }else{
    console.log(`Movement ${i+1}: You withdraw ${Math.abs(move)}`) // to avoid -ve
  }
}
//simple way
console.log('----FOREACH----')
movements.forEach(function(move,i,arr){
 if(move > 0){
    console.log(`Movement ${i+1}: You deposited ${move}`)
  }else{
    console.log(`Movement ${i+1}: You withdraw ${Math.abs(move)}`) // to avoid -ve
  }
});

//ForEach uses: can not use break, and return to stop 
//for of: can break or continue

//ForEach with Map & Set-------------------------
const currencies = new Map([
  ['USG', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP','Pound stering']
]);
currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value,_,map){
  console.log(`${value}: ${value}`)
});

//map,filter,reduce -------------------------------------------------
// //forEach--
// const arr = [
//   {
//     name: 'Alice',
//     mark: 30,
//     place:'Kannur'
//   },
//   {
//     name: 'Bob',
//     mark: 28,
//     place: 'Palakkad'
//   },
//   {
//     name: 'Catherine',
//     mark: 44,
//     place:'Thrissur'
//   },
//   {
//     name:'Daniel',
//     mark:23,
//     place: 'Kollam'
//   }
// ];

// let sum = 0
// arr.forEach((item)=>{
//   sum = sum + item.mark;
// });
// console.log(sum); //120
// //index
// arr.forEach((item,index)=>{
//  console.log(index)
// });
// //find--
// let found = arr.find((item) =>{
//   return item.name === 'bob'
// })
// console.log(found) // undefined

// //we want to find < 30 mark
// let mark = arr.find((item) =>{
//   return item.mark < 30
//     console.log(`It's an average student mark:${item.mark}`)
  
// }) 
// console.log(mark);

// //filter-- : we get all satisfy the condition
// let filter = arr.filter((item) =>{
//   return item.mark < 30
// })
// console.log(filter);

// //map--
// let maping = arr.map((item)=>{
//   return {
//     ...item,country: "India"
//   };
// });
// console.log(maping);

const arr = [2,4,5,7,9];

//double
function double(x){
  return x * 2;
}
const output = arr.map(double);

console.log(output);

//binary
//MAP
/**1 */
// function binary(x){
//   return x.toString(2);
// }
// const binaryOutput = arr.map(binary)
// console.log(binaryOutput);

/**2 */
// const binaryOutput = arr.map(function binary(x){
//   return x.toString(2);
// })
// console.log(binaryOutput);

/**3 */
const binaryOutput = arr.map((x) => {
  return x.toString(2);
})
console.log(binaryOutput);

//FILTER 
//odd value
let arr9= [1,2,3,9,5];
function isOdd(x){
  return x % 2;
}
const output1 = arr9.filter(isOdd)
console.log(output1);

//
let arr10 =[2,34,6,3,0,1,2,3]
function isEven(x){
  return x % 2 === 0;
}
const output2 = arr10.filter(isEven);
console.log(output2);

//
const output3 = arr10.filter((x) => x > 4);

console.log(output3);

//reduce--
//sum or max 
const array = [2,4,5,7,9];
// function findSum(x){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     sum += array[i];
//   }
//   return sum;
// }
// console.log(findSum(array));
//accumulator: stores ongoing result 
//current : the item currently being processed 
const output4 = array.reduce(function(acc,curr){
  acc = acc + curr;
  return acc;
},0); 
console.log(output4);

//finMax;
// function findMax(arr){
//   let max = 0;
//   for(let i =0; i< arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([2,4,67,3,5]));

const output5 = array.reduce(function(max,curr){ // we write max instead if acc
    if (curr > max){
      max =curr;
    }
    return max;
},0);
console.log(output5)

const users = [
  {firstName: 'Alex', lastName: 'John', age:26},
  {firstName:'Donald', lastName: 'trump', age: 75},
  {firstName:'Elon', lastName:'Musk',age:50},
  {firstName:'Deepika', lastName:'padukone', age:26},
];

//list of full name
const out = users.map((x) => x.firstName +' '+ x.lastName)
console.log(out);
//perticular unique age
const age = users.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
  }else{
    acc[curr.age] = 1;
  }
  return acc;
},{})
console.log(age)
//<30 and only want's firstName
// const ageLess = users.filter(x => x.age < 30).map(x => x.firstName)
//using reduce
const ageLess = users.filter(x => x.age < 30).reduce(function(acc,curr){
  if(curr.age > 30){
    acc.push(curr.firstName)
  }
  return acc
},[])
console.log(ageLess);
//----------------------------------------------HOW TO KNOW WHICH TO USE--------------------------------------------------------------------
//--->MAP: transform each item
//--->FILTER: select certain items
//--->REDUCE: combine items
//Map-----------:
//transform each element of an array. return new array.
// const newArray = arr.map((element,index) => {
//   return;
// })
//1:double
const number = [2,4,5,6];
function doub(n){
  return n*2
}
const doubleNum = number.map(doub)
console.log(doubleNum);

const doubleNumber = number.map(n => n*2);
console.log(doubleNumber);
//2:extract first name
const user =[
  {firstName: 'Alice', age: 30},
  {firstName:'Bob', age:28},
];
function extract(name){
  return name.firstName;
}
const first = user.map(extract);
console.log(first)

const extracFirst = user.map(el => el.firstName);
console.log(extracFirst);

//3:-squre
const num1 = [1,2,3,4,5];
const squre = num1.map(n => n * n);
console.log(squre);

//4: make a array with the length of each word([5,6,6])
const fruits = ['apple','banana','cherry'];
const newLengthArray = fruits.map(el => el.length)
console.log(newLengthArray);
//filter----------:
//select elements that satisfy a condition .returns a new array
//const filteredArray = arr.filter(element => /**condition */);
//1: no < 10
const num = [2,4,6,23];
function lessTen(n){
  if(n < 10) {
    return n;
  }
}
const less = num.filter(lessTen)
console.log(less);

const smallNum = num.filter(n => n < 10);
console.log(smallNum);
//2: user age < 30
const userAge = user.filter(el => el.age < 30);
console.log(userAge)

//3: > 10
const num2 = [12,5,8,130,44];
const greatTen = num2.filter(n => n>10);
console.log(greatTen)
//reduce----:
//accumulate array into single value or array
//const result = arr.reduce((accumulator,currenvalue) => {
//  return /**new accumulator */},initialvalue)

//1: sum of numbers
const arr11= [1,2,3,4];
const resultSum = arr11.reduce((acc,curr) => acc+ curr, 0);
console.log(resultSum);

//2: collect names
const names = user.reduce((acc,curr) => {
  acc.push(curr.firstName);
  return acc
},[]);
console.log(names)

// //combination of map,reduce,filter
// //get sum of ages of user under 30
// const details = [
//   {firstName: 'Alice', age:25},
//   {firstName: 'Bob', age:32},
//   {firstName: 'Catherine', age:20},
// ];
// const combine = details.filter(x => x.age < 30).map(x => x.age).reduce((acc,curr) =>{
//   acc = acc + curr;
//   return acc;
// },0);
// console.log(combine);
