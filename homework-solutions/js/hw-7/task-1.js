/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  let result = [];
  for (const array of arrays) {
    result = result.concat(array);
  }
  return result;
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6], [6, 8, 9, 77777]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let result = '';

  if (sentence.trim() === '') {
    return '';
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

    for (let w of words) {
      result += w[0].toUpperCase() + w.slice(1) + '_';
    }

    result = result.slice(0, -1);
    result = result.charAt(0).toLowerCase() + result.slice(1);

    return result;
  }
}
console.log(devideBy('I am super   ЫВАПРО engineer'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(fibonacci(333));

export { mergeArrays, fibonacci, devideBy };
