import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResults';
let manUnitedWins = 0;
const reader = new CsvFileReader('football.csv');
reader.read();

for (const match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games this year, looser`);
