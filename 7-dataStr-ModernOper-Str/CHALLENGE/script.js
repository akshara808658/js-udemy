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

