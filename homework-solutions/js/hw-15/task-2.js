"use strict";
/*
Создайте интерфейс IPerson, абстрактный класс Employee, который реализует интерфейс IPerson, и конкретные классы Manager и Developer.
  - Интерфейс IPerson должен содержать:
      Стринговые поля: name, surname
      Намберовые поля: experienceYears
      Метод, возвращающий строку: getDetails().
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ✅ Абстрактный класс Employee
class Employee {
    name;
    surname;
    experienceYears;
    salary = 0;
    constructor(name, surname, experienceYears) {
        this.name = name;
        this.surname = surname;
        this.experienceYears = experienceYears;
        this.calculateSalary(); // Зарплата считается при создании
    }
}
// ✅ Класс Manager
class Manager extends Employee {
    preferred;
    constructor(name, surname, experienceYears, preferred) {
        super(name, surname, experienceYears);
        this.preferred = preferred;
    }
    calculateSalary() {
        this.salary = this.experienceYears * 500;
    }
    getDetails() {
        return `My name is ${this.name} ${this.surname}, I am a manager with ${this.experienceYears} years of experience, prefers ${this.preferred} and ${this.salary}$ salary`;
    }
}
// ✅ Класс Developer
class Developer extends Employee {
    programmingLanguage;
    constructor(name, surname, experienceYears, programmingLanguage) {
        super(name, surname, experienceYears);
        this.programmingLanguage = programmingLanguage;
    }
    calculateSalary() {
        this.salary = this.experienceYears * 1000;
    }
    getDetails() {
        const langFullName = {
            js: "JavaScript",
            ts: "TypeScript",
            java: "Java",
            python: "Python",
        };
        return `My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${langFullName[this.programmingLanguage]} and ${this.salary}$ salary`;
    }
}
// ✅ Примеры использования:
const dev = new Developer("Tatsiana", "Test", 6, "ts");
console.log(dev.getDetails());
// My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary
const manager = new Manager("Andrei", "Test", 5, "scrum");
console.log(manager.getDetails());
// My name is Anna Scrumovna, I am a manager with 5 years of experience, prefers scrum and 2500$ salary
