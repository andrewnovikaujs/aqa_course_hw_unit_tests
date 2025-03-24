class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  #validateSalary(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('Salary must be a valid number');
    }
    if (value <= 0) {
      throw new Error('Salary must be greater than zero');
    }
    if (value >= 10000) {
      throw new Error('Salary must be less than 10000');
    }
  }

  #validateName(value, fieldName, minLength = 2) {
    const regex = /^[A-Za-z]+$/;
    if (typeof value !== 'string' || !regex.test(value) || value.length < minLength || value.length > 50) {
      throw new Error(
        `${fieldName} must contain only latin letters and be between ${minLength} and 50 characters long`,
      );
    }
  }

  #validateProfession(value) {
    const regex = /^[A-Za-z ]+$/;
    if (typeof value !== 'string' || !regex.test(value) || value.trim().length < 1) {
      throw new Error('Profession must contain only latin letters and spaces and be at least 2 characters long');
    }
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#validateSalary(value);
    this.#salary = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this.#validateName(value, 'First name');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this.#validateName(value, 'Last name', 1);
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    this.#validateProfession(value);
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

    const employee = this.#employees.find((emp) => emp.firstName === firstName);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  }

  getEmployeeIndex(firstName) {
    if (typeof firstName !== 'string' || firstName.length < 1) return -1;
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
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
    return this.#employees.reduce((accum, emp) => accum + emp.salary, 0);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Company: ${this._title}\nAddress: ${this._address}\nEmployees: ${this.#employees.length}`;
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
console.log(company.findEmployeeByName('Jane'));
company.removeEmployee('John');
console.log(company.getEmployees());

export { Employee, Company };
