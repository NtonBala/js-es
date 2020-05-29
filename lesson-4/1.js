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

// Решение
const person = {
  get salary () {
    const today = new Date();
    const delta = new Date((20 * 86400000) + today.getTime());

    const message = today.getMonth() === delta.getMonth() ? 'good salary' : 'bad salary';

    return message;
  },
};

console.log(person.salary); // good salary

exports.person = person;
