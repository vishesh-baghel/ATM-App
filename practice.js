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
