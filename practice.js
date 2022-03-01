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

console.log((2.4).toFixed(0));
console.log(+(2.334).toFixed(3));
console.log(5 % 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(4));

const diameter = 287_000_000_00000;
console.log(diameter);
console.log(Number("230_000"));
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(24525463423523553523345345345352n);
console.log(BigInt(24525463423523553523345345345352));
console.log(1000n + 1000n);
console.log(42823794728492894832n * 234342432n);
const huge = 234234243342n;
const num = 23;
console.log(huge * BigInt(num));
console.log(20n === 20);

console.log(huge + " is reall big ");
console.log(11n / 2n);

const now = new Date();
console.log(now);

const account3 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};
console.clear();
console.log(new Date(account3.movementsDates[0]));
const future = new Date(2022, 10, 18, 23, 4, 5);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getTime());
console.log(Date.now());

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(
  new Date(2022, 10, 18, 23, 4, 5),
  new Date(2028, 10, 18, 23, 4, 5)
);
console.log(days1);

const options = {
  style: "unit",
  unit: "mile-per-hour",
  currency: "EUR",
};
const numm = 2343.234;
console.log("US:", new Intl.NumberFormat("en-US.").format(numm));
console.log("US:", new Intl.NumberFormat("en-Germany.").format(numm));
console.log("US:", new Intl.NumberFormat("en-Syria.").format(numm));

console.log("dsf");
console.log("dsf");
console.log("dsf");

setTimeout(() => console.log("here is your pizza"));
