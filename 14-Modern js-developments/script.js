//Importing module
// import {addToCart,totalPrice as price ,tq} from './shoppingCart.js';

console.log('Importing module')
import * as ShoppingCart from './shoppingCart.js'

ShoppingCart.addToCart('bread', 7)

console.log(ShoppingCart.totalPrice)
// addToCart('bread', 5);
// console.log(price,tq)
//
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
