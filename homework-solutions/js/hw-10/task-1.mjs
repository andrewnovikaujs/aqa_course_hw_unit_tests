/*
 1. Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord),
    который будет возвращать строку вида: 
    ${greetingsWord}, my name is ${name}, i'm ${age} and my salary is ${salary}. 
    Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
*/

let qa = {
  name: 'Andrew', 
  age: 32, 
  salary: 10000,
  getInfo(greetingWord) {
    return `${greetingWord}, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}`;  
  }
}

/*
 2. Changing the context
  - Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()
 */

let anotherQa = {
  name: 'Andrew 2',
  age: 31,
  salary: 8000
}

console.log(qa.getInfo('Hello'));

// Используйте bind с greetingWord "Hello"
let bindResult = qa.getInfo.bind(anotherQa)('Hello');

console.log(bindResult);

// Используйте call с greetingWord "Hi"
let callResult = qa.getInfo.call(anotherQa, 'Hi');

console.log(callResult);

// Используйте apply с greetingWord "Hey"
let applyResult = qa.getInfo.apply(anotherQa, ['Hey']);

console.log(applyResult);

/*
 3. Closures
  - Создайте функцию createCounter(),
  - Создайте в функции createCounter переменную count, которая будет равна 0
  - Верните из функции createCounter новую функцию
  - В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
  - После увеличение каунтера выводите в консоль Function was called ${count} times
  - Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
  - Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные
*/

function createCounter() {
  // Ваш код
  let count = 0;
  return () => {
    count++;
    console.log(`Function was called ${count} times`);
    return count;
  };
}

const functionCallCounter = createCounter();

export { qa, bindResult, callResult, applyResult, functionCallCounter, anotherQa };
