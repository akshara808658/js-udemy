//Exporting module
console.log('Exporting Module');

const shippingCost = 10;
const cart = [];

export function addToCart(product, quantity){
  cart.push({product,quantity});
  console.log(`${quantity} ${product} added to cart`)
}

const totalPrice = 234;
const totalQuantity = 23;

export{totalPrice,totalQuantity as tq}

