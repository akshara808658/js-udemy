// // 'use strict'
// // //ARRAY METHODS
// // //push():add element to the end
// // let a = [1,2,3];
// // a.push(4);
// // console.log(a) // [1,2,3,4]


// // //pop():remove the last element
// // a.pop();
// // console.log(a) //[1,2,3]

// // //shift():remove the first element
// // a.shift();
// // console.log(a);//[2,3]

// // //ushift:add the first element
// // a.unshift(1);
// // console.log(a); //[1,2,3]

// // //splice(start,deleteCount,..items): adds or removes or replace elements: 
// // a.splice(1,1,'x');
// // console.log(a) // [1,x,3]

// // //sort(): sort array(alphabetically by default)
// // let b = [7,3,0];
// // let c=['x','o','a'];
// // b.sort();
// // a.sort();
// // c.sort();
// // console.log(b); //[0,3,7]
// // console.log(a);//[1,3,x]
// // console.log(c); //[a,o,x]

// // //reverse: reverse array order
// // let r = [1,2,3,0];
// // r.reverse();
// // console.log(r); //[0,3,2,1]

// // //fill(value,start,end): fills array with given value
// // let f = [2,3,5,8,0,7,9];
// // f.fill(0,0,2);
// // console.log(f) // [0,0,5,8,0];

// // //ACCESSOR METHOD
// // //concat : merges array into new array
// // let a1 = [1,2];
// // let b1 = [3,4];

// // console.log(a1.concat(b1));

// // //includes(): check if the value is exist 
// // console.log([1,2,3].includes(1));

// // //join() : convert to string
// // console.log([1,2,3].join('-'))

// // //slice(start,end): extract part into new array
// // let arr = [9,2,4,1,2,3,7,7,8];
// // console.log(arr.slice(3,6)); // extract [1,2,3];

// // //toString() : convert array to string
// // console.log([1,2,3].toString());

// // //toLocalString() : convert to localized string
// // console.log([1000].toLocaleString('en-IN'));

// // //forEach() : runs a fn on each element
// // [1,2].forEach(x => console.log(x)); 

// // //map() : create new array with tranformed values
// // console.log([1,2,3].map(x => x*2));

// //practise
// let arr1 = [2,4,6,7,8,8]
// console.log(arr1.slice(2,4)) // 6,7
// console.log(arr1.slice(-2))//8,8
// console.log(arr1.slice(1,-2)) // 4,6,7
// console.log([...arr1])

// //splice
// console.log(arr1.splice(-1));
// console.log(arr1);

// //reverse
// const arr2 = ['a','b','c','d'];
// console.log(arr2.reverse());

// //concat
// const letters = arr1.concat(arr2);
// console.log(letters)
// console.log([...arr1, ...arr2]) // same as concat

// //join
// console.log(letters.join('-'));

// //sort
// const arr3 = [10,3,5,0,9,7];
// arr3.sort((a,b) => b-a);
// console.log(arr3) // dece: [10,9,7,5,3,0]
// const arr4 = ['o','z','x','a','y'];
// console.log(arr4.sort()) // a,o,x,y,y

// //at method for current index element
// const arr5 = [23,11,64];
// console.log(arr5[0]) //23
// console.log(arr5.at(0)) //23

// //getting last array element
// console.log(arr5[arr5.length-1]) //64
// console.log(arr5.slice(-1)[0]);
// console.log(arr5.at(-1))

// console.log('Alexa'.at(0));
// console.log('Alexa'.at(-1));

// //Looping arrys:ForEach
// const movements = [200,450,-400,3000,-650,-130,70,1300];
// // for(const move of movements){ // without entries like movement 1: 
// for (const [i,move] of movements.entries()){
//   if(move > 0){
//     console.log(`Movement ${i+1}: You deposited ${move}`)
//   }else{
//     console.log(`Movement ${i+1}: You withdraw ${Math.abs(move)}`) // to avoid -ve
//   }
// }
// //simple way
// console.log('----FOREACH----')
// movements.forEach(function(move,i,arr){
//  if(move > 0){
//     console.log(`Movement ${i+1}: You deposited ${move}`)
//   }else{
//     console.log(`Movement ${i+1}: You withdraw ${Math.abs(move)}`) // to avoid -ve
//   }
// });

// //ForEach uses: can not use break, and return to stop 
// //for of: can break or continue

// //ForEach with Map & Set-------------------------
// const currencies = new Map([
//   ['USG', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP','Pound stering']
// ]);
// currencies.forEach(function(value,key,map){
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value,_,map){
//   console.log(`${value}: ${value}`)
// });

// //map,filter,reduce -------------------------------------------------
// // //forEach--
// // const arr = [
// //   {
// //     name: 'Alice',
// //     mark: 30,
// //     place:'Kannur'
// //   },
// //   {
// //     name: 'Bob',
// //     mark: 28,
// //     place: 'Palakkad'
// //   },
// //   {
// //     name: 'Catherine',
// //     mark: 44,
// //     place:'Thrissur'
// //   },
// //   {
// //     name:'Daniel',
// //     mark:23,
// //     place: 'Kollam'
// //   }
// // ];

// // let sum = 0
// // arr.forEach((item)=>{
// //   sum = sum + item.mark;
// // });
// // console.log(sum); //120
// // //index
// // arr.forEach((item,index)=>{
// //  console.log(index)
// // });
// // //find--
// // let found = arr.find((item) =>{
// //   return item.name === 'bob'
// // })
// // console.log(found) // undefined

// // //we want to find < 30 mark
// // let mark = arr.find((item) =>{
// //   return item.mark < 30
// //     console.log(`It's an average student mark:${item.mark}`)
  
// // }) 
// // console.log(mark);

// // //filter-- : we get all satisfy the condition
// // let filter = arr.filter((item) =>{
// //   return item.mark < 30
// // })
// // console.log(filter);

// // //map--
// // let maping = arr.map((item)=>{
// //   return {
// //     ...item,country: "India"
// //   };
// // });
// // console.log(maping);

// const arr = [2,4,5,7,9];

// //double
// function double(x){
//   return x * 2;
// }
// const output = arr.map(double);

// console.log(output);

// //binary
// //MAP
// /**1 */
// // function binary(x){
// //   return x.toString(2);
// // }
// // const binaryOutput = arr.map(binary)
// // console.log(binaryOutput);

// /**2 */
// // const binaryOutput = arr.map(function binary(x){
// //   return x.toString(2);
// // })
// // console.log(binaryOutput);

// /**3 */
// const binaryOutput = arr.map((x) => {
//   return x.toString(2);
// })
// console.log(binaryOutput);

// //FILTER 
// //odd value
// let arr9= [1,2,3,9,5];
// function isOdd(x){
//   return x % 2;
// }
// const output1 = arr9.filter(isOdd)
// console.log(output1);

// //
// let arr10 =[2,34,6,3,0,1,2,3]
// function isEven(x){
//   return x % 2 === 0;
// }
// const output2 = arr10.filter(isEven);
// console.log(output2);

// //
// const output3 = arr10.filter((x) => x > 4);

// console.log(output3);

// //reduce--
// //sum or max 
// const array = [2,4,5,7,9];
// // function findSum(x){
// //   let sum = 0;
// //   for(let i = 0; i < arr.length; i++){
// //     sum += array[i];
// //   }
// //   return sum;
// // }
// // console.log(findSum(array));
// //accumulator: stores ongoing result 
// //current : the item currently being processed 
// const output4 = array.reduce(function(acc,curr){
//   acc = acc + curr;
//   return acc;
// },0); 
// console.log(output4);

// //finMax;
// // function findMax(arr){
// //   let max = 0;
// //   for(let i =0; i< arr.length; i++){
// //     if(arr[i] > max){
// //       max = arr[i];
// //     }
// //   }
// //   return max;
// // }
// // console.log(findMax([2,4,67,3,5]));

// const output5 = array.reduce(function(max,curr){ // we write max instead if acc
//     if (curr > max){
//       max =curr;
//     }
//     return max;
// },0);
// console.log(output5)

// const users = [
//   {firstName: 'Alex', lastName: 'John', age:26},
//   {firstName:'Donald', lastName: 'trump', age: 75},
//   {firstName:'Elon', lastName:'Musk',age:50},
//   {firstName:'Deepika', lastName:'padukone', age:26},
// ];

// //list of full name
// const out = users.map((x) => x.firstName +' '+ x.lastName)
// console.log(out);
// //perticular unique age
// const age = users.reduce(function(acc,curr){
//   if(acc[curr.age]){
//     acc[curr.age] = ++acc[curr.age];
//   }else{
//     acc[curr.age] = 1;
//   }
//   return acc;
// },{})
// console.log(age)
// //<30 and only want's firstName
// // const ageLess = users.filter(x => x.age < 30).map(x => x.firstName)
// //using reduce
// const ageLess = users.filter(x => x.age < 30).reduce(function(acc,curr){
//   if(curr.age > 30){
//     acc.push(curr.firstName)
//   }
//   return acc
// },[])
// console.log(ageLess);
// //----------------------------------------------HOW TO KNOW WHICH TO USE--------------------------------------------------------------------
// //--->MAP: transform each item
// //--->FILTER: select certain items
// //--->REDUCE: combine items
// //Map-----------:
// //transform each element of an array. return new array.
// // const newArray = arr.map((element,index) => {
// //   return;
// // })
// //1:double
// const number = [2,4,5,6];
// function doub(n){
//   return n*2
// }
// const doubleNum = number.map(doub)
// console.log(doubleNum);

// const doubleNumber = number.map(n => n*2);
// console.log(doubleNumber);
// //2:extract first name
// const user =[
//   {firstName: 'Alice', age: 30},
//   {firstName:'Bob', age:28},
// ];
// function extract(name){
//   return name.firstName;
// }
// const first = user.map(extract);
// console.log(first)

// const extracFirst = user.map(el => el.firstName);
// console.log(extracFirst);

// //3:-squre
// const num1 = [1,2,3,4,5];
// const squre = num1.map(n => n * n);
// console.log(squre);

// //4: make a array with the length of each word([5,6,6])
// const fruits = ['apple','banana','cherry'];
// const newLengthArray = fruits.map(x => x.length)
// console.log(newLengthArray);

// //5-turn to upperCase
// const line = ['hello','world','javascript'];
// const capital = line.map(el => el.toUpperCase());
// console.log(capital);

// //filter----------:
// //select elements that satisfy a condition .returns a new array
// //const filteredArray = arr.filter(element => /**condition */);
// //1: no < 10
// const num = [2,4,6,23];
// function lessTen(n){
//   if(n < 10) {
//     return n;
//   }
// }
// const less = num.filter(lessTen)
// console.log(less);

// const smallNum = num.filter(n => n < 10);
// console.log(smallNum);
// //2: user age < 30
// const userAge = user.filter(el => el.age < 30);
// console.log(userAge)

// //3: > 10
// const num2 = [12,5,8,130,44];
// const greatTen = num2.filter(n => n>10);
// console.log(greatTen)

// //4-only names of users under 30
// const userName = [
//   {name: 'Alice', age:25},
//   {name: 'Bob', age: 32},
//   {name:'Charlie', age:28},
// ];
// const underthirty = userName.filter(x =>x.age< 30).map(x =>x.name);
// console.log(underthirty);

// //5-keep only even numbers
// const array1 = [3,7,10,15,18];
// const evenNum = array1.filter(n => n%2 === 0);
// console.log(evenNum);

// //6-add the word length together
// const words = ['pen','pencil','book'];
// const totalLength = words.map(el => el.length).reduce((acc,curr) => acc+curr,0);
// console.log(totalLength)

// //reduce----:
// //accumulate array into single value or array
// //const result = arr.reduce((accumulator,currenvalue) => {
// //  return /**new accumulator */},initialvalue)

// // //1: sum of numbers
// const arr11= [1,2,3,4];
// const resultSum = arr11.reduce((acc,curr) => acc+ curr, 0);
// console.log(resultSum);

// //2: collect names
// const names = user.reduce((acc,curr) => {
//   acc.push(curr.firstName);
//   return acc
// },[]);
// console.log(names)

// //3-total sum
// let num3 = [10,20,30,40];
// const sumNum = num3.reduce((acc,curr) => acc+curr, 0);
// console.log(sumNum);

// //4-score >= 50
// const students = [
//   {name: 'Alice',score:80},
//   {name: 'Bob',score: 45},
//   {name: 'Charlie', score:60},
// ];
// const greater = students.filter(x => x.score >= 50).map(x => x.name)
// console.log(greater);

// //5-Turn into one string
// const array2 = ['a','b','c'];
// const str = array2.reduce((acc,curr) =>acc+curr, "");
// console.log(str);

// // //combination of map,reduce,filter
// // //get sum of ages of user under 30
// //1
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

// //2
// const student2 = [
//   {name: 'Alice' , score: 80},
//   {name: 'Bob' , score: 45},
//   {name: 'Charlie' , score: 60},
//   {name: 'David' , score: 30},
// ];
// const greaterSixty = student2.filter(x =>x.score >= 60).map(x => x.name.toUpperCase());
// console.log(greaterSixty);

// //3:- total no.of chara in word longer than 3 latters 
// const words2 = ['pen','pencil','book','hi','apple'];
// const totalNum = words2.map(x => x.length).filter(x =>x > 3).reduce((acc,curr) => acc+curr,0);
// console.log(totalNum)

// //find method---------------------------------------------------------------
// //diff b/w find and filter: 
// //find: return only the first matching element(single value not array), filter:return all matching element(array)
// const num4 = [10,20,30,40,50];
// console.log(num4.filter(n => n >25)); //[ 30, 40, 50 ]
// console.log(num4.find(n => n > 25)); //30

// //1:first even no in the array
// const findArr = [1,3,7,8,10];
// const firstEven = findArr.find(n => n%2 === 0);
// console.log(firstEven);//8

// //2-find the whoes name is Bob
// const students3 = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 25 }
// ];
// const bob = students3.find(el => el.name ==='Bob');
// console.log(bob);

// //3-find the first word longer than 4 letters
// const words3 = ["pen", "book", "pencil", "hi"];
// const longerThree = words3.find(w => w.length > 4);
// console.log(longerThree);

// //findIndex-------------------------
// //1: find index of first even no
// const num5 = [1,3,5,7,8,10];
// const index = num5.findIndex(el => el%2 === 0);
// console.log(index);

// //2-element not found 
// const num6 = [1,3,5];
// const index2 = num6.findIndex(el => el%2 === 0);
// console.log(index2); //-1;

// //findLast------------------------------
// //return the last element in the array satisfies condition
// const num7 = [1,2,3,4,5,8,0];
// const lastEven = num7.findLast(n => n % 2 === 0);
// console.log(lastEven);

// //findLastIndex------------------------
// const lastIndexOfEven = num7.findLastIndex(n => n%2 === 0);
// console.log(lastIndexOfEven);

// //some-------
// //almost same as find method in some result is boolean 
// const num8 = [1,3,5,6];
// const haveEven = num8.some(n => n%2 === 0);
// console.log(haveEven); //true

// //every--------
// //check all element in an array satisfy the condition return boolean
// const num9 = [2,4,6,8];
// const everyNumEven = num9.every(n => n % 2 === 0);
// console.log(everyNumEven); //true

// //flat--------------
// //1-flatens nested array
// const array3 = [1,[2,3],[4,5]];
// console.log(array3.flat())

// //2-flatten multiple levels
// const flatArr =[1,[2,[3,[4]]]];
// console.log(flatArr.flat(3));

// //flatMap---------------------------
// //map each element and then flattens the results one level
// //1 : maps nos to array and flattens 
// const arr12 = [1,2,3];
// const result = arr12.flatMap(n => [n, n*2]);
// console.log(result);

// //2:flatten string to chara
// const arr13 = ['hi','bye'];
// const result2 = arr13.flatMap(str => str.split(''));
// console.log(result2);

// //3:keep only even no.s and double them
// const num10 = [1,2,3,4];
// const result3 = num10.flatMap(n =>(n%2 === 0 ? [n*2] : []));
// console.log(result3);

// //sort--------------------------------------
// //sorts the elements of an array in place
// //not numeric
// const num11 = [10,5,20,1];
// console.log(num11.sort()); //[1,10,20,5];

// //numeric
// const numericSort = num11.sort((a,b) => a - b); // accendind , b-a decending 
// console.log(numericSort);

// //sorting string 
// //length
// const fruit=['banana','apple','cherry'];
// fruit.sort((a,b) => a.length - b.length);
// console.log(fruit);

// //sort by age acenting
// const users1 = [
//   {name: "Alice", age: 25},
//   {name: "Bob", age: 30},
//   {name: "Charlie", age: 20}
// ];
// users1.sort((a,b) =>a.age - b.age);
// console.log(users1);

// //groupBy---------------------
// //groups elements of an array
// // const numbers = [1,2,3,4,5,6,7];
// // const grouped = numbers.groupBy(n => n%2 === 0 ? 'Even' : 'Odd');
// // console.log(grouped); // not run in terminal

// //new Array()----------------------
// const arr14 = new Array(1,2,3,5);
// console.log(arr14);


// //fill-----------
// //array.fill(value, start  = 0, end = arry.length)
// const arr15 = new Array(5).fill(0);
// console.log(arr15);

// const arr16 = [1,2,3,4,5].fill('x',1,4);
// console.log(arr16); //[1,x,x,x,5];

// //Arry.from----------------
// //new array from an array-like object or iterable.
// const chars = Array.from('hello');
// console.log(chars);

// //from set
// const set = new Set([1,2,3]);
// console.log(Array.from(set)); //[1,2,3];

// //using map fn 
// const squres =Array.from([1,2,3], x => x*x);
// console.log(squres);

// //create array of no.s
// const x = Array.from({length:7}, () => 5);
// console.log(x);

// const arr17 = Array.from({length:4}, (_,i) => i);
// console.log(arr17);//[0,1,2,3,4]

// //Which methos is use? ------
// //---->change from original: 
//   //add: push(e),unshift(s)
//   //remove:pop(e),shift(e),splice(any)
//   //others :-reverse, sort ,fill

// //---->A new array based on original
//   //same length as original: map
//   //filtered using condition : filter
//   //teking portion of original: slice
//   //flat : flat,flatMap

// //An array index
//   //value: indexof
//   //test condition : findIndex, findLastIndex

// //An array element 
//   //test condition : find, findLast

// //know if array includes
//    //value: includes
//    //test condition : some, every

// //A new string 
//   //seperation: join

// //transform to value
//   //based on accumulator :reduce  

// //just loop array 
//    //based on callback : forEach

// //new array
//   //Array.from
//   //new Array(n)

// //concat
//   //spread operators : [...arr1,...arr2]

// //new array with unique value
//   //[...new Set(arr)]

// //------------------------------------------------------PRACTICE----------------------------------------------------------------
// const practiseArr = [1,2,3,4,5,2,3,3];
// //push 6
//  practiseArr.push(6)
//  console.log(practiseArr);

//  //remove last el
//  practiseArr.pop();
//  console.log(practiseArr);

//  //remove first
//  practiseArr.shift();
//  console.log(practiseArr);

//  //add 0 at start
//  practiseArr.unshift(0);
//  console.log(practiseArr);//[0,2,3,5,2,3]

//  //replace 3 with x
//  practiseArr.splice(2,2,'x');
//  console.log(practiseArr) //[0,2,x,5,2,3]

//  //replace middle element with 9
//  practiseArr.fill(9,2,3);
//  console.log(practiseArr); //[0,2,9,5,2,3]

//  //merge with [7,8,9];
//  console.log( practiseArr.concat([7,8,9,3]));

// //check if 2 exist
// console.log(practiseArr.includes(2));

// //indexof first 3
// console.log(practiseArr.indexOf(3));
// console.log(practiseArr) //[0,2,9,5,2,3,3]

// //indexof last 3
// console.log(practiseArr.lastIndexOf(3));

// //extract [2,9,5]
// console.log(practiseArr.slice(1,4));

// //join with -
// console.log( practiseArr.join('-'))

// //convert all array to string
// console.log(practiseArr.toString());

// //print each el with its index
// practiseArr.forEach((el,i) => console.log(`${i}: ${el}`));

// //double no
// const preacticeDouble = practiseArr.map(n => n*2)
// console.log(preacticeDouble) //[0,4,18,10,4,6,6]

// //get only even no.s
// const getEven = practiseArr.filter(n => n%2 === 0);
// console.log(getEven);

// //sum of all el
// const sumEl = practiseArr.reduce((acc,curr) => acc+curr,0);
// console.log(sumEl);

// //find the max value
// const maxValue = practiseArr.reduce((acc,curr) =>{
// return curr > acc ? curr:acc;
// },[0]);
// console.log(maxValue);

// //first no > 3
// const practise = [0, 2, 9, 5, 2, 3, 7, 8, 9, 3];

// const greaterThree = practise.find(n => n > 3);
// console.log(greaterThree) //9 :-bcz first matching el > 3

// //find index of firstEven 
// const firstEvenNum = practise.findIndex(n=> n%2 === 0);
// console.log(firstEvenNum); 

// //find last 
// const lastIndexOfEvenNum = practise.findLastIndex(n => n%2 === 0);
// console.log(lastIndexOfEvenNum); //7

// //check if any no > 5
// const checkGreaterFive = practise.some(n => n > 5);
// console.log(checkGreaterFive);

// //check all no.s are +ve
// const checkPositive = practise.every(n => n >= 0);
// console.log(checkPositive);

// //flat [1,[2,[3]]];
// const flatenArr = [1,[2,[3]]];
// const flatEl = flatenArr.flat(2);
// console.log(flatEl); //[1,2,3];

// //double num but remove odd ones
// const removeDouble = practise.flatMap(n => n%2 === 0 ? [n * 2] : []);
// console.log(removeDouble);

// //create empty array of length 4 AND fill 1;
// const createArr = new Array(4).fill(1);
// console.log(createArr);

// //create array 1-5
// const newArray2 = Array.from({length:5}, (_, i) => i+1);
// console.log(newArray2)

// //square
// const newArray3 = Array.from([1,2,3], n => n*2);
// console.log(newArray3);

//2
const products = [
    { id: 101,
       name: "Laptop", 
       price: 75000, 
       stock: 5, 
       categories: 
       ["Electronics", "Computers"] 
      },
    { 
      id: 102, 
      name: "Smartphone", 
      price: 35000, 
      stock: 10, 
      categories: 
      ["Electronics", "Mobile"]
     },
    { 
      id: 103, 
      name: "Headphones", 
      price: 3000, 
      stock: 15, 
      categories: 
      ["Electronics", "Audio"] 
    },
    { id: 104, 
      name: "Keyboard", 
      price: 1500, 
      stock: 0, 
      categories: 
      ["Computers", "Accessories"] 
    },
    { id: 105, 
      name: "Chair", 
      price: 4500, 
      stock: 7, 
      categories: 
      ["Furniture"] 
    },
    { 
      id: 106, 
      name: "Desk Lamp", 
      price: 1200, 
      stock: 12, 
      categories: 
      ["Furniture", "Lighting"]
     }
];
//all name
function Name(){
  products.forEach(el => console.log(el.name));
}
Name()

//get all product price
function productPrice(){
  products.forEach(el => console.log(el.price));
}
productPrice();

//find product with id 104
function find104(){
 const result = products.find(el => el.id === 104);
 console.log(result)
}
find104();

//get all products in the electronic categories
function productElectronic(){
  const electronic = products.filter(el => el.categories.includes('Electronics'));
  console.log(electronic);
}
productElectronic();

//calculate total stock of all products
function totalStock(){
  const allProduct = products.reduce((sum,p) => sum+p.stock,0);
  console.log(allProduct);
}
totalStock();

//check if any pruduct is out of the stock
function outOffStock(){
  const outOff = products.some(el => el.stock === 0);
  console.log(outOff);
}
outOffStock();

//check all products cost more than 1000
function more1000(){
  const moreThan = products.every(el => el.price > 1000);
  console.log(moreThan);
}
more1000();

//flatten all categories into a single list
function singleList(){
  const oneList = [...new Set(products.flatMap(el => el.categories))]
  console.log(oneList);
}
singleList()

//find the product with highest price
function highestPrice(){
  const highPrice = products.reduce((acc,curr) => curr.price > acc ? curr.price : acc , 0);
  const topProduct = products.filter(p => p.price === highPrice);
  console.log(topProduct)
}
highestPrice();

//increase the stock of all products by 5 and return a new array
function newArray(){
  const updatedProduct = products.map(p => ({...p, stock: p.stock + 5}));
  console.log(updatedProduct);
}
newArray();

//apply 10% discount on all product price
function updatePrice(){
  const discountPrice = products.map(el => ({...el, price: el.price * 0.9}))
  console.log(discountPrice);
}
updatePrice()

//print the names of products with stock less than 10
function product(){
  const lessStock = products.filter(el => el.stock < 10).map(el =>el.name);
  console.log(lessStock);
}
product();

//create a new array of object like {name, totalValue} where totalValue = price * stock
function newArr(){
  const updateProduct = products.map(el => ({name:el.name, totalValue: el.price * el.stock}));
  console.log(updateProduct);
}
newArr();

//get all products that belongs to both 'Electronics' and 'Mobile' categories
function belong(){
  const newfilter = products.filter(el => el.categories.includes('Electronics')&& el.categories.includes('Mobile'));
  console.log(newfilter);
}
belong();