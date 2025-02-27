/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

let forEach;

const result = [];

numbers.forEach((number) => (number % 3 === 0 ? result.push(number) : null));

forEach = result;

console.log(forEach);

let map;

const result2 = numbers.map((number, index, arr) => number - arr.length);

map = result2;

console.log(map);

let filter;

const result3 = numbers.filter((number, index, arr) => index > 0 && number > arr[index - 1]);

filter = result3;

console.log(filter);

let find;

const result4 = numbers.find((number, index, arr) => index === number);

find = result4;

console.log(find);

let sort;

const result5 = numbers.sort((a, b) => a - b);

sort = result5;

console.log(sort);

let reduce;

const result6 = numbers.reduce((current, number) => current + number, 0);

reduce = result6;

console.log(reduce);

let some;

const result7 = numbers.some((number) => number > 90);

some = result7;

console.log(some);

let every;

const result8 = numbers.every((number) => (number >= 10 && number <= 99));

every = result8;

console.log(every);

export { forEach, map, filter, find, sort, reduce, some, every };
