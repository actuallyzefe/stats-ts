import { read } from 'fs';
import { CsvReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvReader('football.csv');
reader.read();
let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`ManU has won ${manUnitedWins} `);
