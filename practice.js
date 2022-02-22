const movements = [2, 399, 4, 100, 5, 22, -234, -43];
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
};

checkDogs([3, 4, 5, 6], [3, 45, 6, 7]);

const ages = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 4 * age + 16));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  console.log(average);
};

// const calcAverageHumanAge = ages => ages.map(ages => (age <= 2 ? 2* age : 16 + ))

calcAverageHumanAge(ages);

const eurToUsd = 1.1;
const totalDeposits = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposits);
console.clear();

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// const account = accounts.find((acc) => acc.owner === "vishesh baghel");
// console.log(account);

const anyDeposits = movements.some((mov) => mov > 1000);
console.log(anyDeposits);

console.log(movements.every((mov) => mov > 0));

const arr = [
  [[2, 3], 1, 23, 4],
  [3, 4, 5],
];
console.log(arr.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);

movements.sort((a, b) => a - b);
console.log(movements);

console.log([1, 2, 3, 4]);
const x = new Array(7);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// const diceRolls = Array.from({ length: 10 }, Math.floor(Math.random() * 6) + 1);
// console.log(diceRolls);

// program to check if the string is palindrome or not
console.clear();
const str = "alla";
function checkPalindrome(str) {
  // find the length of a string
  const len = str.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (str[i] !== str[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
// const num = 5;
// function factorial(num) {
//   return num * factorial(num - 1);
// }
// console.log(factorial(5));
// console.log(checkPalindrome(str));

console.log(0.1 + 0.2);
console.log(Number.parseInt("20px   "));
console.log(Number.parseFloat("   2.3rem"));

console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20x"));
console.log(Number.isNaN(20 / 0));

console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));

console.log(Math.sqrt(25));
console.log(8 ** (1 / 3));

console.log(Math.max(2, 4, 5, 6));
console.log(Math.min(2, 4, "3", 5, 6));

console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

console.log(Math.ceil(23.1));
console.log(Math.round(23.1));
console.log(Math.floor("23.9"));
