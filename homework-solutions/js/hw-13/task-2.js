"use strict";
/*
Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.

*/
Object.defineProperty(exports, "__esModule", { value: true });
function validatePassword(password) {
    if (password.length >= 8 &&
        password.trim() !== '' &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password)) {
        return true;
    }
    return false;
}
