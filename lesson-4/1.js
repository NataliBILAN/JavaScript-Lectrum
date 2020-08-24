/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {
    get salary() {
        const today = new Date();
        const dayOfTheCurrentMonth = today.getDate();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const days = new Date(currentYear, currentMonth + 1, 0);
        const daysInCurrentMonth = days.getDate();

        console.log(dayOfTheCurrentMonth);
        console.log(currentMonth);
        console.log(currentYear); 
        console.log(`There\'re ${daysInCurrentMonth} days in current month!` );

        if ((daysInCurrentMonth - dayOfTheCurrentMonth) > 20) {
            return  'good salary';
        }

        return  'bad salary';   
    }
};

// Решение
person.salary; // good salary

exports.person = person;
