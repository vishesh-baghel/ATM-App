"use strict";

///////////////////////////
/////////////DATA//////////
///////////////////////////

const account1 = {
  owner: "vishesh baghel",
  movements: [200, 340, -122, 20000, -433, -250, 4500, 2300],
  interestRate: 1.2, //%
  pin: 1111,
};

const account2 = {
  owner: "kunal srivastav",
  movements: [5000, 2300, -5999, -234, 60000],
  interestRate: 1.5,
  pin: 2222,
};

const accounts = [account1, account2];

///////////////////////////
/////////////ELEMENTS//////
///////////////////////////

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector("form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

const movements = [233, 4, 5, 343, -234];

const euroToUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return mov + euroToUsd;
});

console.log(movements);
