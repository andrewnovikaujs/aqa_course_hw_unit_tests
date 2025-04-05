// 1. Функция delayTwoSeconds
function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
  }
  
  // 2. Промис, который резолвится с числом 1
  const promise1 = Promise.resolve(1);
  promise1.then(result => console.log(result));
  
  // 3. Промис, который реджектится с "Promise failed"
  const promise2 = Promise.reject("Promise failed");
  promise2.catch(error => console.log(error));
  
  // 4. Функция, возвращающая промис с переданным числом
  function promiseNumber(number) {
    return Promise.resolve(number);
  }
  
  // 5. Promise.all с .then
  Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(results => results.forEach(result => console.log(result)))
    .catch(error => console.log(error));
  
  // 6. Promise.allSettled с .then
  Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(results => results.forEach(({ status, value, reason }) => 
      console.log(`Status: ${status}, Result: ${value ?? reason}`)
    ));
  
  // 7. Асинхронная версия с try..catch
  async function asyncPromiseAll() {
    try {
      const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
      results.forEach(result => console.log(result));
    } catch (error) {
      console.log(error);
    }
  }
  
  async function asyncPromiseAllSettled() {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach(({ status, value, reason }) => 
      console.log(`Status: ${status}, Result: ${value ?? reason}`)
    );
  }
  
  asyncPromiseAll();
  asyncPromiseAllSettled();

