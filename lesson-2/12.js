// С помощью цикла `for` и оператора `if` проверьте есть ли в массиве элемент со значением, равным 4. Если есть — выведите на экран `Есть!` и выйдите из цикла. Если нет - ничего делать не надо.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [1, 2, 5, 9, 4, 13, 4, 10];

////////////////// Решение //////////////////
const array = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < array.length; i++) {
  const value = array[i];

  if (value === 4) {
    console.log('Есть!');

    break;
  }
}
