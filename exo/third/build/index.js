"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResults_1 = require("./MatchResults");
let manUnitedWins = 0;
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games this year, looser`);
