/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (word === undefined || word === null || typeof word !== 'string') {
    return false;
  } else if (word.trim() === '') {
    return true;
  } else {
    word = word.trim().toLowerCase();
    let letters = word.split('');

    for (let i = 0; i < letters.length / 2; i++) {
      if (letters[i] !== letters[letters.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPalindrom(1));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  let result = '';
  if (sentence === undefined || sentence === null || typeof sentence !== 'string') {
    return [];
  } else if (sentence.trim() === '') {
    return [];
  } else {
    sentence = sentence.trim().toLowerCase();

    let words = [];
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== ' ' || (word.length > 0 && sentence[i] === ' ' && sentence[i - 1] !== ' ')) {
        if (sentence[i] !== ' ') {
          word += sentence[i];
        } else {
          words.push(word);
          word = '';
        }
      }
    }
    if (word.length > 0) {
      words.push(word);
    }

    result = words;

    let maxLength = 0;
    let longestWords = [];

    for (let i = 0; i < words.length; i++) {
      const currentLength = words[i].length;

      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestWords = [words[i]];
      } else if (currentLength === maxLength) {
        longestWords.push(words[i]);
      }
    }

    result = longestWords;

    return result;
  }
}

console.log(findLongestWords('hello hello 12345 if any body here'));

export { isPalindrom, findLongestWords };
