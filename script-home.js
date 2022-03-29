// scope and variable scope is different
// block scope definition:
// only applicable for let and const variables.
// var will be available outside also.
// functions are also blocked scoped.

// Scope chain
// parent scope variables are available for inside functions. this is known as scope chain. The whole process of finding the variables is known as variable lookup

// scope chain has nothing to do with the order in which functions are called. Scope chain only cares about the order in which the functions are written in the code

// there are three types of scopes in JS
// global scope
// function scope
// block scope

// only let and const variables are block scoped. variables declared with var end up in the closest function scope

// IN JS we have lexical scoping so the rules of where we can access variables are based on exactly where in the code functions and blocks are written

// a scope will never, ever have access to the variables of an inner scope

// This is just for the commits

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}You are ${age}, born in ${birthYear}`;
//     alert(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       var millenial = true;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     add(2, 3);
//   }
//   return age;
// }

// const firstName = "vishesh";
// calcAge(1999);

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allbuttons = document.getElementsByTagName("button");

console.log(allbuttons);

document.getElementsByClassName("btn");

//creating and inserting elements

const message = document.createElement("div");

message.classList.add("cookie-message");

message.textContent =
  'WE use cookies for improved functionality and analytics <button class = "btn btn--close-cookie">Got it! </button> ';

Headers.prepend(message);

Headers.append(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");
