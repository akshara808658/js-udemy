//Asynchronous JS
//synchronous: is excuted line by line, each line of waits for previous line to finish
/**
 * console.log('start');
 * console.log('Middle');
 *  run line by line
 */
//Asynchronous: some tasks can run in the background
// console.log('Start');

// setTimeout(() => {
//   console.log('After 2 seconds');
// },2000);

// console.log('End');

//Ajax: stands for asynchronous js and XML, its a techinque that allows web pages to send and receive data from a server without reloading the whole page 
//eg: when you scroll instagram new posts load automatically that's ajax in action.

//API: application programming interface- piece of software that can be used by another piece of software, in order to allow applications to talk to each other;

//we almost use JSON instead XML

//what happens when we access a web server?
//your browser first performs a Domain Name System (DNS) lookup to find the server's IP address, then establishes a TCP(Transmission control protocols) connection(between server and computer). Your browser sends an HTTP request to the server for the desired website files (HTML, CSS, images). The server processes the request, retrieves the files, and sends them back to your browser in an HTTP response. Finally, your browser receives these files, assembles them, and renders the webpage.

//HTTP request:-
//GET /res/v2/alpha/PT HTTP/1.1 --> stat line: HTTP method(GET) + request target + HTTP version(HTTP/1.1)

//HTTP response:- 
//HTTP/1.1 200 ok ---> start line: HTTP version + status code + status message

//callback hell
//many nested callback fns one inside another making code look like a  'pyramid of doom'
// setTimeout(() => {
//   console.log('1: Getting user data...');
//   setTimeout(() => {
//     console.log('2: Getting user posts...');
//     setTimeout(() => {
//       console.log('3: Getting user comments...');
//       setTimeout(() =>{
//         console.log('4: Done!')
//       },1000)
//     },1000)
//   },1000)
// },1000)

//promises------------
  // A promise is an object that represents eventual completion/failure of an asynchronous operation.
  // A promise has 3 states: pending | fulfilled | rejected.
  //  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  // A promise resolves only once and it is immutable. 
  // Using .then() we can control when we call the cb(callback) function.
//diff
//calback: pass a fn to another fn, that callback will be exceuted after the async work is done.
//problem:- if you need to chain more async steps (like proceedPayment, showSummary), you get nested callback that is hard to read and maintain
// const cart = ['shoes', 'pants','kurta'];

// createOrder(cart, function(orderId){
//   proceedPayment(orderId);
// });

// //promise :- a promise return an object immediately that represents a future value , you can attach callbacks later using .then() or .catch().
// const promise = createOrder(cart);

// promise.then(function (orderId){
//   proceedPayment(orderId);
// });

////

// const cart = ['shoes','pants','kurta'];

// const promise = createOrder(cart);
// console.log(promise);

// promise.then(function(orderId){
//   console.log(orderId);
// })
// .catch(function (err){
//   console.log(err.message);
// });
// // proceedToPayment(orderId);
// function createOrder(cart){
//   const pr = new Promise(function (resolve, reject){
//     if(!validateCart(cart)){
//       const err = new Error('Cart is not valid');
//       reject(err);
//     }
//     const orderId = '123345';
//     if(orderId){
//       setTimeout(function(){
//         resolve(orderId);
//       },1000)
//     }
//   });
//   return pr;
// }
// function validateCart(cart){
//   return false;
// };

///////////////////////////

//overview 
//1-Asynchronous js
/**
 * js normally runs line by line but sometimes we need to wait for something  like fetching data from a server 
 */
//2- AJAX(Asynchronous js & XML)
/**
 * AJAX is a technique to send and receive data from a server without reloading the page
 * XMLHttpRequest(old way)
 * fetch()(modern way)
*/
/*
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));
*/

//3-Promise
/**
 * a promise is an object that represents a eventual completion/failure of asynchronous operation.
 * pending(waiting)
 * fulfilled(done successfully)-->resolve()
 * rejected(failed)---> reject()
 */
/**
 then() runs if it's successful
 catch() runs if there's an error
 */

 //promise chaining: 
 /**
  * linking multiple .then() calls one after another where each .then()  can use the result of the previous promise.
  * usage: it helps multiple asychronous tasks in order.
  */

 //what is async? -----
 //async fn: always return a promise
//  async function getData(){
//   return 'heyy!';
//  }
//  const data = getData();
//  data.then((res) => console.log(res));

 //await is key word that can only use inside the async function
//  const p = new Promise((resolve,reject) => {
//   resolve('Promise Resolved value');
//  });

//  async function handlePromise(){
//   const val = await p;
//   console.log(val);
//  }
//  handlePromise();

//diff b/w async await method and promise
const p1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('Promise Resolved value!');
  },10000);
});

const p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('Promise Resolved value!');
  },5000);
});

//promise--
//  function getData(){
//   p.then((res) => console.log(res));
//   console.log('Hey I am first!')
//  }
//  getData();

 //async await--
 async function handlePromise(){
   console.log('Hello World') // not wait for 10 sec
   //JS engine was waiting for promise to resolved 
   const val = await p1;
   console.log('Hey I am Here!');
   console.log(val);

   const val2 = await p2;
   console.log('Hey I am Here!!!!');
   console.log(val2);
 }
 handlePromise();
 //call stack never block, await pauses the async fn not entire js engine, promises are pending while waiting for results
 //if p1 is 5sec and p2 is 10sec then first print p1 and after 10 sec print p2, if p1 10 sec and p2 is 5 sec then p2 is wait for p1 resolve and after that both of them is printed.

 //Eg:- 
 /*
 const API_URL = 'https://api.github.com/users/akshara808658';
 async function handlePromises(){

  const data = await fetch(API_URL);
  const jsonValue = await data.json() // for key value pairs ,for readable

  console.log(jsonValue)
  // fetch().then(res => res.json()).then(res => console.log())
 }
 handlePromises()
 // fetch() => when the promise is resolved it's give the response object
*/
// const API_URL = 'https://api.github.com/users/akshara808658';
// const API_URL = 'https://invaliderandamurl';

//  async function handlePromises(){
//   try{
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   }
//   catch(err){
//     console.log(err)
//   }
//  }
// handlePromises();

//try : - where you try running your code
//catch: - where you handle the error if it fails

/** */
// const API_URL = 'https://invaliderandamurl';

//  async function handlePromises(){
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//  }
// handlePromises().catch((err) => console.log(err));

//Async await vs promise .then/ .catch
/*
fetch('https://api.example.com/data')
  .then(response => response.json())     // handle the resolved value
  .then(data => {
    console.log('✅ Data received:', data);
  })
  .catch(error => {
    console.log('❌ Error happened:', error);
  });

  then() handles success and catch() handle error , code look nested less readable
*/

/*
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('✅ Data received:', data);
  } 
  catch (error) {
    console.log('❌ Error happened:', error);
  }
}
getData();

await pauses until the promise resolves 
try runs the success code 
catch handles errors 
code looks cleaner
 */
//
