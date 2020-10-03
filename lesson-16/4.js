/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение

class Stringer {
  
    reverse (string) {
        const reversedString = string.split("").reverse().join("");

        return reversedString;
    }

    uppercaseFirst(string) {
        const uppercasedFirstLetter = string.charAt(0).toUpperCase() + string.slice(1, string.length);

        return uppercasedFirstLetter;
    }
    
    uppercaseAll(string) {
        const array = string.split(" ");
        const uppercasedAll = array
            .map(item => item[0].toUpperCase() + item.slice(1, item.length))
            .join(" ");

        return uppercasedAll;
    }
   
}

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;