// Перепишите код, заменив оператор `switch` на оператор `if..else`:

////////////////// Задание //////////////////
// const value = 'c';

// switch (value) {
//     case 'a':
//         console.log('a');
//         break;

//     case 'b':
//     case 'c':
//     case 'd':
//     case 'e':
//         console.log('others');
//         break;

//     default:
//         console.log('unknown');
// }

////////////////// Решение //////////////////

const value = 'c';

if (value === 'a') {
    console.log('a');
} if (value === 'b' || 'c' || 'd' || 'e') {
    console.log('others');
} else {
    console.log('unknown');
};
