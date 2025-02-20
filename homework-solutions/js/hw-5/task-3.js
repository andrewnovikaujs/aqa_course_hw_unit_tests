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
  } else if (consonants.includes(letter)) {
    consonantsCount++;
  } else {
    continue;
  }
}

vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;

console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };

/*
2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
  шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
  Направление шифрования задается переменной offset, которая может быть +1 и -1.
  Например let str = 'AbC'; let offset = -1, result = 'ZaB';
  Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
*/

let str = `ABCтест-    -abc`;

let offset = -1;

let result = '';

const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < str.length; i++) {
  const letter = str[i];

  if (upperAlphabet.includes(letter)) {
    let index = upperAlphabet.indexOf(letter);
    result += upperAlphabet[(index + offset + 26) % 26]; // эту часть помог gpt сам долго не понимал - пошел искать
  } else if (lowerAlphabet.includes(letter)) {
    let index = lowerAlphabet.indexOf(letter);
    result += lowerAlphabet[(index + offset + 26) % 26];
  } else if (letter === '-') {
    result += '-';
  } else if (letter === ' ') {
    result += ' ';
  } else {
    result += '?';
  }
}

console.log(result);
