/*
   Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/

async function createTodo(todo) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      });
  
      if (response.status !== 201) {
        throw new Error('Failed to create todo. Status code is not 201');
      }
  
      const data = await response.json();
  
      // Проверка на совпадение данных
      for (const key in todo) {
        if (todo[key] !== data[key]) {
          throw new Error(`Mismatch in ${key} value`);
        }
      }
  
      return data;
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      console.log('Function execution finished');
    }
  }
  
  // Пример использования
  const newTodo = {
    title: 'Finish homework',
    completed: false,
    userId: 1,
  };
  createTodo(newTodo).then(result => console.log('Created todo:', result));