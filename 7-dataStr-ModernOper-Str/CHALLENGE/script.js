const game ={
  team1: 'Bayern Munich',
  team2:'Borrussia Dortmund',
  players: [
    [
     'Neuer',
     'Pavard',
     'Martinez',
     'Alaba',
     'Davies',
     'Kimmich',
     'Goretzika',
     'Coman',
     'Muller',
     'Gmarby',
     'Lewandowski'
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze'
    ],
  ],
  score: '4.0',
  scored: ['Lewansowski','Gnarby','Lewadowski','Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2:6.5,
  },
};
//split players to 2 array
const [players1,players2] = game.players
console.log(players1,players2);

//one goalkeeper other are remaining players
const[goalkeeper,...field] = players1
console.log(goalkeeper,field);

//allplayers
const allplayers = [...players1,...players2]
console.log(players1,players2);

//finals
const players1Final = [...players1,'Thiago','Coutindo','Peristic']
console.log(players1Final);

//change odds x name to draw
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw,team2);

//
function printGoals(...players){
  console.log(players);
  console.log(`${players.length} goals were scored`);
}
// printGoals('Davies','Muller','Lewandowski','Kimich');
// printGoals('Davies','Muller');
printGoals(...game.score)

//which team is more likely to win
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log(('Team 2 is more likely to win'));

    // CHALLENGE 2
//Goal 1: Lewandoski
for(let [i,player] of game.scored.entries())
  console.log(`Goal ${i+1}: ${player}`);

//avg of odds
const odds = Object.values(game.odds)
let average = 0;
for (const odd of odds) average += odd;
console.log(average);

average /= odds.length
console.log(average);

//print content on the clg
for(const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr}: ${odd}`); 
}

//  CHALLENGE3
const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitute'],
  [47, 'GOAL'],
  [61, 'Substitute'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70,'Substitute'],
  [72,'Substitute'],
  [76,'GOAL'],
  [80,'GOAL'],
  [92,'Yellow card'],
]);
//add ub=nique
const events = [...new Set(gameEvents.values())];
console.log(events);

//delete yellow card
gameEvents.delete(64);

//print
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

//
const time = [...gameEvents.keys()];
console.log(time);

//
for (const [min,event] of gameEvents){
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`)
}

//  CHALLENGE 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click',function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()){
    const [first,second] = row.toLowerCase().trim().split('_');
    if(!second) continue;
    const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅' .repeat(i + 1)}`);
  }
});

//PRACTISE
const flights = 
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
/*Result
 🔴 Delayed Departure from FAO to TXL (11h25)
      Arrival from BRU to FAO (11h45)
 🔴 Delayed Arrival from HEL to FAO (12h05)
      Departure from FAO to LIS (12h30)
*/
const getCode = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')){
  const [type,from,to,time] = flight.split(';');
  const output =`${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(38);
  console.log(output)
}

//
const trains =
  '_Delayed_Departure;nyc123456;bos987654;09:15+_Arrival;chi654321;nyc123456;12:30+_Departure;bos987654;chi654321;13:45+_Delayed_Arrival;nyc123456;bos987654;15:00';

for(const train of trains.split('+')){
  const [type,from,to,time] = train.split(';');
  const ouput2 = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_',' ')}from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} ${time.replace(':','h')}`.padStart(37);
  console.log(ouput2);
}
//
const packages =
  '_Delayed_Pickup;jfk123;ldn456;08:00+_Delivered;ldn456;jfk123;10:45+_In_Transit;nyc789;ldn456;12:30+_Delayed_Delivery;ldn456;nyc789;16:15';

  for(const package of packages.split('+')){
  const [type,from,to,time] = package.split(';')
  const output3 = `${type.startsWith('_Delayed')? '🔴' : ''} ${type.replaceAll('_',' ')} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} ${time.replace(':','h')}`.padStart(39);
  console.log(output3) 
  }



