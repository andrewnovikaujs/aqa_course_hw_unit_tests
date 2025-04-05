"use strict";
/*
Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы.
   Затипизировать надо саму функцию и коллбэк.
   Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
   где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]
*/
Object.defineProperty(exports, "__esModule", { value: true });
function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
console.log(map([1, 2, 3, 4, 5], (item, index) => item * index));
