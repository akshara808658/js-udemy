//    CHALLENGE1
// const calcAvg = (score1,score2,score3) => {
//   return (score1+score2+score3)/3
// }
// const scoreDolphins = calcAvg(85,54,41)
// const scoreKolas = calcAvg(23,34,27)

// function checkWinner(dolphinsScore,koalaScore){
//   if(dolphinsScore >= 2* koalaScore){
//     return `Dolphins win (${dolphinsScore} vs ${dolphinsScore})`
//   }else{
//     return 'No team wins'
//   }
// }
// console.log(checkWinner(scoreDolphins,scoreKolas));

const calcAvg = (a,b,c)=>{
  return (a+b+c) / 3
}
//test 1
let scoreDolphins = calcAvg(44,23,71);
let scoreKolas = calcAvg(65,54,49);
console.log(scoreDolphins,scoreKolas);

const checkWinner = function(avgDolphins,avgKoalas){
if(avgDolphins >= 2 * avgKoalas){
  console.log(`Dolphines win (${avgDolphins} vs.${avgKoalas})`);
}else if(avgKoalas >= 2 * avgDolphins){
   console.log(`Kolas win (${avgDolphins} vs.${avgKoalas})`);
}else{
  console.log('No team wins...');
}
}
checkWinner(scoreDolphins,scoreKolas);

checkWinner(576,111);

//Test2
scoreDolphins = calcAvg(85,54,41);
scoreKolas = calcAvg(23,34,27);
console.log(scoreDolphins,scoreKolas);
checkWinner(scoreDolphins,scoreKolas);

//   CHALLENGE2
function calcTip(bill){
  const tip = (bill >= 50 && bill < 300) ? (bill*0.15) : (bill*0.2);
  return tip;
}
const bills = [125,555,44]
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

let total =[(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])];

console.log(total);

//   CHALLENGE3
const mark ={
  fullName:"Mark miller",
  mass:"78",
  height:"1.69",
  calBMI:function(){
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}
const john= {
  fullName:"John Smith",
  mass:92,
  height:1.95,
  calBMI:function(){
    this.bmi = this.mass/(this.height ** 2);
    return this.bmi;
  }
}

mark.calBMI();
john.calBMI();


if( mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName} 's ${john.bmi}!`);
}else{
  console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName} 's ${mark.bmi}!`);
}

/**/