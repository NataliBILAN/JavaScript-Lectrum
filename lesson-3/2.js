/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

function checkSpam (source, example) {
    if (typeof source !== 'string' && typeof example !== 'string') {
        console.log(typeof source);
        console.log(typeof example);
        return;
    } else {
        let sourceInLowCase = source.toLowerCase();
        let exampleInLowCase = example.toLowerCase();
    
        return sourceInLowCase.includes(exampleInLowCase);
    }    
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
