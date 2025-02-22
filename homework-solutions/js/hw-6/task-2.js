/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultNull;

const resultUnique = [];

const competitorPizzasLowerCase = [];

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];

const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

for (const pizza of competitorPizzas) {
  competitorPizzasLowerCase.push(pizza.toLowerCase());
}

for (const pizza of myPizzasT1) {
  competitorPizzasLowerCase.includes(pizza.toLocaleLowerCase())
    ? (resultNull = null)
    : resultUnique.push(pizza.toLocaleLowerCase());
}

for (const pizza of myPizzasT2) {
  competitorPizzasLowerCase.includes(pizza.toLocaleLowerCase())
    ? (resultNull = null)
    : resultUnique.push(pizza.toLocaleLowerCase());
}

console.log(resultNull);

console.log(resultUnique);

export { resultNull, resultUnique };
