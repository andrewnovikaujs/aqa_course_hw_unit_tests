/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz'; 

vowelsAndConsonantsResult = word.trim().toLocaleLowerCase();

let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < word.length; i++) {
  const letter = word[i];

  if (vowels.includes(letter)) {
    vowelsCount++;
  } else if (consonants.includes(letter)){
    consonantsCount++;
  } else {
    continue;
  }
}

vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;

console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
