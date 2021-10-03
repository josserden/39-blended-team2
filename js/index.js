// const guestName = "Mango";
// const guestNum = 5;
// const guestObj = {};
// const guestArr = [];

// console.dir(guestName);
// console.dir(guestNum);
// console.dir(guestName.__proto__);
// console.dir(guestNum.__proto__);

// console.dir(guestObj);
// console.dir(guestArr);
// console.dir(guestObj.__proto__);
// console.dir(guestArr.__proto__);

// console.dir(guestName.__proto__.__proto__.__proto__);
// console.dir(guestNum.__proto__.prototype);
// console.dir(guestObj.__proto__.prototype);
// console.dir(guestArr.__proto__.prototype);

// const guestName = "Mango";

// const newName = Array.prototype.map.call(guestName, (letter) => {
//   return `*${letter}*`;
// });

// console.log(newName);

// const sweetArray = [2, 56, 89, 1, 3];

// const newSweetArray = sweetArray.map((number) => number * 2);

// console.log(newSweetArray);

// const makeSweet = (number) => number * 2;

// const newSweetArray = sweetArray.map(makeSweet);

// console.log(newSweetArray);

// const users = [
//   { name: "shark", likes: "ocean" },
//   { name: "turtle", likes: "beach" },
//   { name: "fish", likes: "sea" },
// ];

// const userByLikes = users.map((item) => {
//   const obj = {};

//   obj[item.name] = item.likes;
//   obj.age = item.name.length * 2;

//   return obj;
// });

// console.log(userByLikes);

// const arr = [...users];

// console.log(arr);

// function first() {
//   console.log(1);
// }

// function second() {
//   console.log(2);
// }

// first();

// second();

/*
- завтрак {
  - накрыть на стол
  - разогреть еду
  - сделать чай / кофе
}

- стирка {
  - сборка грязной одежды
  - сборка постельного белья
}

- шоппинг {
  -
  -
}

- итог семейного бюджета{
  -
  -
}

*/

// function first() {
//   // Имитация запроса к API

//   setTimeout(function () {
//     console.log(1);
//   }, 3000);
// }

// function second() {
//   console.log(2);
// }

// first();

// second();

// function user() {
//   let name = "John";

//   return function showName() {
//     console.log(name);
//   };
// }

// const john = user();

// john();

// function getCounter() {
//   let counter = 0;

//   return function () {
//     return (counter += 1);
//   };
// }

// const count = getCounter();
// const count2 = getCounter();

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count2());
// console.log(count2());
// console.log(count2());
// console.log(count2());
// console.log(count2());

/*
 * Вам дан массив. Значения в массиве будут либо числами, либо строками, либо их комбинацией. Ваша задача - вернуть массив, в котором будут идти сначала числа, отсортированные в порядке возрастания, а затем строки, отсортированные в алфавитном порядке.Значения должны сохранить свой исходный тип. Если на входе была строка, то и вернуться должна строка, если число - число.
 */

// Пример кода:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']
