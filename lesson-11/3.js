/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
const createFibonacciGenerator = function () {
    let prev = 0;
    let next = 1;

    const createFibonacci = () => {  
          next = prev + next;
          prev = next - prev;
   
        return prev;
      }
      

      return ({
          print: () => {
            return createFibonacci();
          },

          reset: () => {
            prev = 0;
            next = 1;
          }
      })
}

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;
