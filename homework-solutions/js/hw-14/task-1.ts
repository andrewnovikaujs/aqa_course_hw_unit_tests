/*
1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
*/

interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}

const qa: IEmployee = {
  name: 'Andrew',
  salary: 10000,
  isManager: true,
};

/*
2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
*/

type EmployeeKeys = keyof IEmployee;

/*
3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
*/

type QaKeys = keyof typeof qa;

/*
4. Создайте тип UserType из объекта QA (используйте typeof)
*/

type UserType = typeof qa;

/*
5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
*/

type PartialEmployee = Partial<IEmployee>;

/*
6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
*/

type EmployeeNameAndSalary = Pick<IEmployee, 'name' | 'salary'>;

/*
7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
*/

type EmployeeWithoutManager = Omit<IEmployee, 'isManager'>;

/*
8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
*/

type ReadonlyEmployee = Readonly<IEmployee>;

/*
9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
*/

type QAKeysRecord = Record<string, keyof typeof qa>;

/*
10. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
    function wrapInArray<T> {
      // ваш код здесь
    }

    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello']
*/

function wrapInArray<T>(value: T): T[] {
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

function getLastElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    console.error("Empty array");
    return undefined;
  }
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3, 4])); // 4
console.log(getLastElement(['a', 'b', 'c'])); // 'c'
console.log(getLastElement([])); // 'error'
