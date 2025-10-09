//Exporting module
console.log('Exporting Module');

//Blocking code
console.log('Finish fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users')


const shippingCost = 10;
export const cart = [];

export function addToCart(product, quantity){
  cart.push({product,quantity});
  console.log(`${quantity} ${product} added to cart`) 
}

const totalPrice = 234;
const totalQuantity = 23;

export{totalPrice,totalQuantity as tq};

export default function(product,quantity){
  cart.push({product, quantity});
  console.log(`${quantity}${product} added to cart`);
}

/**
 * Export : export const cart = [] , make variable or fn available to others
 * Import : import { cart } from './file.js' , use exported code in another file 
 * Default Export : export dafault fn() , only one per file; import without {}
 * top-level await : await fetch() , works only in modules
 * module pattern : (function (){..}()) , old way to create private/public code
 * avoid global scope: use modules or IIFE , prevents conflicts
 */