class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (value < 0 || isNaN(value) || typeof value === 'string' || value === 0) {
      throw new Error('Salary cannot be negative');
    } else if (value >= 10000) {
      throw new Error('Salary must be less than 10000');
    } else if (typeof value !== 'number') {
      throw new Error('Salary must be a number');
    }

    this.#salary = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(value)) {
      throw new Error('First name must contain only latin letters');
    } else if (typeof value !== 'string' || value.length < 2 || value.length > 50) {
      throw new Error('First name must be at least 2 characters long');
    }

    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(value)) {
      throw new Error('Last name must contain only latin letters');
    } else if (typeof value !== 'string' || value.length < 0 || value.length > 50) {
      throw new Error('Last name must be at least 2 characters long');
    }

    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    const regex = /^[A-Za-z ]+$/;

    if (!regex.test(value)) {
      throw new Error('Profession must contain only latin letters and spaces');
    } else if (typeof value !== 'string' || value.length < 0 || value === ' ') {
      throw new Error('Profession must be at least 2 characters long');
    }

    this._profession = value;
  }
}

class Company {
  #employees;
  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Invalid employee');
    }
    this.#employees.push(employee);
  }

  findEmployeeByName(firstName) {
    if (typeof firstName !== 'string' || firstName.length < 1) {
      throw new Error('Invalid name input');
    }

    const employee = this.#employees.find(
      (employee) => employee.firstName === firstName, // Чувствительный к регистру поиск
    );

    if (!employee) {
      throw new Error('Employee not found');
    }

    return employee;
  }

  getEmployeeIndex(firstName) {
    if (typeof firstName !== 'string' || firstName.length < 1) return -1;
    return this.#employees.findIndex((employee) => employee.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.getEmployeeIndex(firstName);
    if (index === -1) {
        throw new Error('Employee not found');
    }
    this.#employees.splice(index, 1);
    return true;
  }

  getTotalSalary() {
    return this.#employees.reduce((accum, employee) => employee.salary + accum, 0);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
