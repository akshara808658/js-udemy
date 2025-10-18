function countNum(n){
  let count = 0;
  n = Math.abs(n)
  if(n === 0) return 1
 while(n >0){
  n = Math.floor(n/10);
  count++;
 }
 return count;
}
console.log(countNum(2356))

//
function countDivisibleByThree(n){
  let count = 0;
  if(n ==0)return 1
  n = Math.abs(n);
  while(n>0){
    let digits = n % 10;
    if(digits % 3 === 0){
      count++;
    }
    n = Math.floor(n /10)
  }
  return count;
}
console.log(countDivisibleByThree(23456789));

//
function reverseNum(n){
  let isNegative = n < 0;
  let reverse = 0;
  n = Math.abs(n);
  
  while(n >0){
    let digits = n % 10;
    reverse = reverse * 10 + digits;
    n = Math.floor(n/10)
  }
  return isNegative ? -reverse : reverse
}
console.log(reverseNum(38950))

//
function sumOfDigits(n){
  let sum = 0;
  n = Math.abs(n)
  while(n>0){
    let digits = n % 10;
    sum += digits;
    n = Math.floor(n/10);
  }
  return sum
}
console.log(sumOfDigits(247))

//
function factorial(n){
  let fact = 1;
  for(let i =1; i<=n; i++){
    fact *= i;
  }
  return fact;
}
console.log(factorial(5))

//
function countEvenOdd(n){
  let even = 0;
  let odd = 0;
  n = Math.abs(n)

  while(n>0){
    let digits = n%10;
    if(digits % 2 === 0){
      even++;
    }
    if(digits % 2 !== 0){
      odd++;
    }
    n=Math.floor(n/10)
  }
  return {even,odd}
}
console.log(countEvenOdd(2354))

//
function palindromechecker(n){
  let rev = 0;
  n = Math.abs(n)
  let original = n 
  let isNegative = n<0

  while(n>0){
    let digits = Math.floor(n%10)
    rev = rev * 10 + digits
    n = Math.floor(n/10)
  }
  let reverse = isNegative ? -rev:rev
 return original === reverse
}
console.log(palindromechecker(12321))
console.log(palindromechecker(123210))

//
