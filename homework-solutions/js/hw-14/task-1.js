"use strict";
/*
1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
*/
Object.defineProperty(exports, "__esModule", { value: true });
const qa = {
    name: 'Andrew',
    salary: 10000,
    isManager: true,
};
/*
10. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
    function wrapInArray<T> {
      // ваш код здесь
    }

    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello']
*/
function wrapInArray(value) {
    return [value];
}
const numberArray = wrapInArray(5); // [5]
const stringArray = wrapInArray('Hello'); // ['Hello']
console.log(numberArray, stringArray);
/*
11. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).

    function getLastItem<T> {
      // ваш код здесь
    }

    console.log(getLastItem([1, 2, 3, 4])); // 4
    console.log(getLastItem(['a', 'b', 'c'])); // 'c'
*/
function getLastElement(arr) {
    if (arr.length === 0) {
        console.error("Empty array");
        return undefined;
    }
    return arr[arr.length - 1];
}
console.log(getLastElement([1, 2, 3, 4])); // 4
console.log(getLastElement(['a', 'b', 'c'])); // 'c'
console.log(getLastElement([])); // 'error'
