// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE MUTATE
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr.splice(1, 2));
// console.log(arr);

// // REVERSE MUTATE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log('letters ', letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

//============LECTURE 141 ======================//

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('--------------- FOR EACH ---------------');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
//   }
// });

//============LECTURE 142 ======================//

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// console.log('================ set ===========');
// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log('currenciesUnique ', currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

//============LECTURE 147 ======================//

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// const movementsUSD = movements.map(mov => mov * euroToUsd);

// console.log('movements ', movements);
// console.log('movementsUSD ', movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * euroToUsd);
// }
// console.log('movementsUSDfor ', movementsUSDfor);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log('movementsDescription ', movementsDescription);

//============LECTURE 149 ======================//

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log('movements ', movements);
// console.log('deposits ', deposits);

// const depositFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositFor.push(mov);
//   }
// }
// console.log('depositFor ', depositFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log('withdrawals ', withdrawals);

//============LECTURE 150 ======================//

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log('movements ', movements);

// // acumulator is like a -> SNOWBALL
// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log('balance ', balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;

// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log('max ', max);

//============LECTURE 152 ======================//
// const euroToUsd = 1.1;

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log('arr ', arr);
//     return mov * euroToUsd;
//   })
//   // .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log('totalDepositsUSD ', totalDepositsUSD);
// console.log('movements ', movements);

//============LECTURE 154 ======================//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('movements ', movements);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log('firstWithdrawal ', firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log('account ', account);

// Solución con For en lugar de find

// for (let i = 0; i < accounts.length; i++) {
//   const account = accounts[i];
//   if (account.owner === 'Sarah Smith') {
//     accountFor = account;
//     console.log('account ', account);
//     break;
//   }
// }

//============LECTURE 158 ======================//

// EQUALITY ---- 'INCLUDES' METHOD
console.log(movements.includes(-130));

// CONDITION ---- 'SOME' METHOD
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log('anyDeposits ', anyDeposits);

// 'EVERY' METHOD
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//============LECTURE 159 ======================//

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log('arr ', arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log('arrDeep ', arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log('accountMovements ', accountMovements);
// const allMovements = accountMovements.flat();
// console.log('allMovements ', allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log('overalBalance ', overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log('overalBalance2 ', overalBalance2);

//============LECTURE 160 ======================//

const owners = ['Carlos', 'Jonas', 'Zach', 'Adam', 'Martha'];
console.log('owners sorted ', owners.sort());
console.log('owners ', owners);

// Numbers
console.log(movements);

// return < 0 A, B
// return > 0 B, A

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// Better method for ascending sort
movements.sort((a, b) => a - b);

console.log('Ascending', movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// Better method for Descending sort
movements.sort((a, b) => b - a);
console.log('Descending', movements);

//============LECTURE 161 ======================//
const arrTest = [1, 2, 3, 4, 5, 6, 7];

// Empty arrays + fill method
const x = new Array(7);
console.log('x ', x);
// x.fill(1);
x.fill(1, 3, 5);
console.log('x ', x);

arrTest.fill(23, 2, 6);
console.log('arrTest ', arrTest);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log('y ', y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log('z ', z);
