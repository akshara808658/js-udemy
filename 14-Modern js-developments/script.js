//Importing module
// import {addToCart,totalPrice as price ,tq} from './shoppingCart.js';

// console.log('Importing module')
// import * as ShoppingCart from './shoppingCart.js'

// ShoppingCart.addToCart('bread', 7)

// console.log(ShoppingCart.totalPrice);

//by default--
import add, { cart } from './shoppingCart.js';
add('Pizza', 2);
add('bread', 5);
add('apples',4);
console.log(cart);

// addToCart('bread', 5);
// console.log(price,tq)
//
async function getLastPost(){
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   const data = await res.json();
   console.log(data);

   return {title: data.at(-1).title, text: data.at(-1).body};
};
const lastPost = getLastPost();
console.log(lastPost);

//Not very clean
// lastPost.then(last => console.log(last));

//

//-----------------------------------------------------------------------------------------------------------------
//Modern Js Development 
//Module
/**
 * module is a piece of code that exporte values, fns or obj so that other files can import and use them.
 * modules help organizing code 
 * avoiding global scope polllution
*/
   //global scope polluting
     /**
      * multiple files using the same global variables -> conflicts.
      * avoid it with:
         IIFE(immediate invoked fn expression) (function(){}()): wrap variable in local scope
         Modules: use export/import 
      */
//
//--------
//module pattern
const ShoppingCart2 = (function() {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity){
   cart.push({product, quantity});
   console.log(`${quantity} ${product} added to cart`);
  };
  return {
   addToCart,
   cart,
   totalPrice,
   totalQuantity,
  }
})();
ShoppingCart2.addToCart('apple' , 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
/*
//common js modules
//Export 
exports.addToCart = function (product,quantity){
   cart.push({product,quantity});
   console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
   );
};

//Import
const { addToCart} = require('./shoppingCart.js');
 */

//package.json : as the heart of a Node.js . it stores the metadate and configuration about your project
  // without this npm would not know  which packages your needs (run --> npm start)
//package-lock.json : locks exact versions of dependencies for repoducibility