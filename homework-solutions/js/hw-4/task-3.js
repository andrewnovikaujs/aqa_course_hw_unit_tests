/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 15;

let maxAge = 60;

let age;

age = '3d';

if (isNaN(age)) {
  console.log('Incorrect data type');
} else {
  age = Number(age); // +age
  if (age < minAge) {
    console.log(
      "You don't have access cause your age is " +
        age +
        " It's less then " +
        minAge,
    );
  } else if (age >= minAge && age < maxAge) {
    console.log('Welcome  !');
  } else if (age > maxAge) {
    console.log('Keep calm and look Culture channel');
  } else {
    console.log('Technical work');
  }
}

