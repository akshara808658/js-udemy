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
//your browser first performs a Domain Name System (DNS) lookup to find the server's IP address, then establishes a TCP connection. Your browser sends an HTTP request to the server for the desired website files (HTML, CSS, images). The server processes the request, retrieves the files, and sends them back to your browser in an HTTP response. Finally, your browser receives these files, assembles them, and renders the webpage.

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

const cart = ['shoes','pants','kurta'];

const promise = createOrder(cart);
console.log(promise);

promise.then(function(orderId){
  console.log(orderId);
})
.catch(function (err){
  console.log(err.message);
});
// proceedToPayment(orderId);
function createOrder(cart){
  const pr = new Promise(function (resolve, reject){
    if(!validateCart(cart)){
      const err = new Error('Cart is not valid');
      reject(err);
    }
    const orderId = '123345';
    if(orderId){
      setTimeout(function(){
        resolve(orderId);
      },1000)
    }
  });
  return pr;
}
function validateCart(cart){
  return false;
};

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
 * fulfilled(done successfully)
 * rejected(failed)
 */
/**
 then() runs if it's successful
 catch() runs if there's an error
 */