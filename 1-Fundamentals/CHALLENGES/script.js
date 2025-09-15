//   CHALLENGE1
const massMark = 75;
const massJohn = 95;
const heightMark = 1.69;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark **2);
const BMIJohn = massJohn / (heightJohn **2);
console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//    CHALLENGE2
if(BMIMark > BMIJohn){
  console.log("Mark's BMI is higher than John's!");
}else {
  console.log("JOHN's BMI is higher than Mark's!");
}
// 

//   CHALLENGE3
let scoreDolphins = (90+ 87+ 88) / 3;
let scoreKolas = (98+ 76+ 86) / 3;

if(scoreDolphins > scoreKolas){
  console.log("Dolphins win the triphy");
}else if (scoreDolphins < scoreKolas){
  console.log("Kolas win the trophy");
}else{
  console.log("Both win the trophy");
}

//   CHALLENGE4
const bill = 200;

const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, the total bill ${bill+ tip}`);
