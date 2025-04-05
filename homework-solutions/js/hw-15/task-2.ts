/*
Создайте интерфейс IPerson, абстрактный класс Employee, который реализует интерфейс IPerson, и конкретные классы Manager и Developer.
  - Интерфейс IPerson должен содержать:
      Стринговые поля: name, surname
      Намберовые поля: experienceYears
      Метод, возвращающий строку: getDetails().
*/

/*

interface IPerson {
    name: string;
    surname: string;
    experienceYears: number;
    getDetails(): string
}

abstract class Employee implements IPerson {
    constructor(
      public name: string,
      public surname: string,
      public experienceYears: number
    ) {}

      abstract getDetails(): string;
  }

class Manager extends Employee {
    getDetails(): string {
      return `Manager: ${this.name} ${this.surname}, ${this.experienceYears} years of experience.`;
    }
  }
  
  class Developer extends Employee {
    getDetails(): string {
      return `Developer: ${this.name} ${this.surname}, ${this.experienceYears} years of experience.`;
    }
  }

*/

/*

  - Абстрактный класс Employee должен:
      Имплементировать интерфейс IPerson.
      Содержать защищенное (protected) поле: salary, не передающееся в конструктор (по дефолту 0)
      Содержать защищенный (protected) абстрактный метод: calculateSalary().,
        который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
      Метод calculateSalary() должен быть использован в конструкторе
*/

/*


// 1. Интерфейс IPerson
interface IPerson {
    name: string;
    surname: string;
    experienceYears: number;
  
    getDetails(): string;
  }
  
  // 2. Абстрактный класс Employee
  abstract class Employee implements IPerson {
    protected salary: number = 0; // Защищённое поле, не передаётся в конструктор
  
    constructor(
      public name: string,
      public surname: string,
      public experienceYears: number
    ) {
      this.calculateSalary(); // Вызываем расчёт зарплаты при создании объекта
    }
  
    // Абстрактный метод: реализуется в наследниках
    protected abstract calculateSalary(): void;
  
    // Обязательный метод из интерфейса
    abstract getDetails(): string;
  }
  
  // 3. Класс Manager
  class Manager extends Employee {
    protected calculateSalary(): void {
      this.salary = 3000 + this.experienceYears * 200;
    }
  
    getDetails(): string {
      return `Manager: ${this.name} ${this.surname}, ${this.experienceYears} years, Salary: $${this.salary}`;
    }
  }
  
  // 4. Класс Developer
  class Developer extends Employee {
    protected calculateSalary(): void {
      this.salary = 2000 + this.experienceYears * 300;
    }
  
    getDetails(): string {
      return `Developer: ${this.name} ${this.surname}, ${this.experienceYears} years, Salary: $${this.salary}`;
    }
  }
  
  // 5. Проверка
  const manager = new Manager("Alice", "Smith", 5);
  console.log(manager.getDetails()); // Manager: Alice Smith, 5 years, Salary: $4000
  
  const developer = new Developer("Bob", "Johnson", 3);
  console.log(developer.getDetails()); // Developer: Bob Johnson, 3 years, Salary: $2900

*/

/*

  - Конкретные классы Manager и Developer должны:
      Наследоваться от Employee.
      Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
      Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
      Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
      Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
      Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
        'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)
*/
  
  // ✅ Интерфейс IPerson
interface IPerson {
    name: string;
    surname: string;
    experienceYears: number;
  
    getDetails(): string;
  }
  
  // ✅ Абстрактный класс Employee
  abstract class Employee implements IPerson {
    protected salary: number = 0;
  
    constructor(
      public name: string,
      public surname: string,
      public experienceYears: number
    ) {
      this.calculateSalary(); // Зарплата считается при создании
    }
  
    // Абстрактный метод для расчёта зарплаты
    protected abstract calculateSalary(): void;
  
    // Метод для вывода информации (реализуется в наследниках)
    abstract getDetails(): string;
  }
  
  // ✅ Класс Manager
  class Manager extends Employee {
    private preferred: 'scrum' | 'kanban';
  
    constructor(
      name: string,
      surname: string,
      experienceYears: number,
      preferred: 'scrum' | 'kanban'
    ) {
      super(name, surname, experienceYears);
      this.preferred = preferred;
    }
  
    protected calculateSalary(): void {
      this.salary = this.experienceYears * 500;
    }
  
    getDetails(): string {
      return `My name is ${this.name} ${this.surname}, I am a manager with ${this.experienceYears} years of experience, prefers ${this.preferred} and ${this.salary}$ salary`;
    }
  }
  
  // ✅ Класс Developer
  class Developer extends Employee {
    private programmingLanguage: 'js' | 'ts' | 'java' | 'python';
  
    constructor(
      name: string,
      surname: string,
      experienceYears: number,
      programmingLanguage: 'js' | 'ts' | 'java' | 'python'
    ) {
      super(name, surname, experienceYears);
      this.programmingLanguage = programmingLanguage;
    }
  
    protected calculateSalary(): void {
      this.salary = this.experienceYears * 1000;
    }
  
    getDetails(): string {
      const langFullName: Record<string, string> = {
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
  