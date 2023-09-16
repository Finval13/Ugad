"use strict";
//  1
// const symb = function (str, b) {
//   let rez = 0;
//   let i = 0;

//   while (i < str.length) {
//     if (str[i] === b) {
//       rez++;
//     }
//     i++;
//   }
//   return rez;
// };
// console.log(symb("цйцца", "ц"));

// 1Б
// const symb = function (str, b) {
//   let rez = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === b) {
//       rez++;
//     }
//   }
//   return rez;
// };

// console.log(symb("папапац", "ц"));

// 1В

// const symb = function () {
//   let str = prompt("Введіть слово");
//   let b = prompt("Введіть букву яку потрібно знайти");
//   let rez = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === b) {
//       rez++;
//     }
//   }
//   console.log(rez);
//   symb();
// };
// symb();

// const palindrom = function () {
//   let word = prompt("Введіть слово");
//   let reversedWord = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
//   }
//   if (word === reversedWord) {
//     console.log("Ваше слово є паліндромом");
//   } else {
//     console.log("Ваше слово не є паліндромом");
//   }
//   palindrom();
// };
// palindrom();

// const zag = function () {
//   const convertNumberToString = function (number) {
//     const units = [];
//     const tens = [];

//     if (number < 1 || number > 99) {
//       return "помилка введеного значення. Число повинно бути в межах від 1 до 99";
//     }

//     if (number < 20) {
//       return units[number];
//     } else {
//       const temp1 = number % 10;
//       const temp2 = Math.floor(number / 10);

//       return tens[temp2] + " " + units[temp1];
//     }
//   };

//   let minRange = 0,
//     maxRange = 100,
//     attempts = 0;

//   alert("загадай ціле число в межах від 0 до 100");

//   while (minRange < maxRange) {
//     const guess = Math.floor((minRange + maxRange) / 2);

//     const userResp = prompt(`ваше число дорівнює ${guess}? (>, < чи =)`);
//     if (userResp === "=" || minRange === maxRange) {
//       attempts++;
//       alert(`Комп'ютер вгадав число за ${attempts} кроків`);
//       break;
//     } else if (userResp === ">") {
//       minRange = guess + 1;
//       attempts++;
//     } else if (userResp === "<") {
//       maxRange = guess - 1;
//       attempts++;
//     }
//   }
//   zag();
// };

// zag();
