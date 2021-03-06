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
const isOthers = value === 'b' || value === 'c' || value === 'd' || value === 'e';

if (value === 'a') {
  console.log('a');
} else if (isOthers) {
  console.log('others');
} else {
  console.log('unknown');
}
