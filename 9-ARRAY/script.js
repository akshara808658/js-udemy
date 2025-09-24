//ARRAY METHODS
//push():add element to the end
let a = [1,2,3];
a.push(4);
console.log(a) // [1,2,3,4]

//pop():remove the last element
a.pop();
console.log(a) //[1,2,3]

//shift():remove the first element
a.shift();
console.log(a);//[2,3]

//ushift:add the first element
a.unshift(1);
console.log(a); //[1,2,3]

//splice(start,deleteCount,..items): adds or removes or replace elements: 
a.splice(1,1,'x');
console.log(a) // [1,x,3]

//sort(): sort array(alphabetically by default)
let b = [7,3,0];
let c=['x','o','a'];
b.sort();
a.sort();
c.sort();
console.log(b); //[0,3,7]
console.log(a);//[1,3,x]
console.log(c); //[a,o,x]

//reverse: reverse array order
let r = [1,2,3,0];
r.reverse();
console.log(r); //[0,3,2,1]

//fill(value,start,end): fills array with given value
let f = [2,3,5,8,0,7,9];
f.fill(0,0,2);
console.log(f) // [0,0,5,8,0];

//ACCESSOR METHOD
//concat : merges array into new array
let a1 = [1,2];
let b1 = [3,4];

console.log(a1.concat(b1));

//includes(): check if the value is exist 
console.log([1,2,3].includes(1));

//join() : convert to string
console.log([1,2,3].join('-'))

//slice(start,end): extract part into new array
let arr = [9,2,4,1,2,3,7,7,8];
console.log(arr.slice(3,6)); // extract [1,2,3];

//toString() : convert array to string
console.log([1,2,3].toString());

//toLocalString() : convert to localized string
console.log([1000].toLocaleString('en-IN'));

//forEach() : runs a fn on each element
[1,2].forEach(x => console.log(x)); 

//map() : create new array with tranformed values
console.log([1,2,3].map(x => x*2));