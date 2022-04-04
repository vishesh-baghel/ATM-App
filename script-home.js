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

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");
// const allbuttons = document.getElementsByTagName("button");

// console.log(allbuttons);

// document.getElementsByClassName("btn");

// //creating and inserting elements

// const message = document.createElement("div");

// message.classList.add("cookie-message");

// message.textContent =
//   'WE use cookies for improved functionality and analytics <button class = "btn btn--close-cookie">Got it! </button> ';

// Headers.prepend(message);

// Headers.append(message);

// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// const logo = document.querySelector(".nav__logo");
// console.log(logo.src);

// logo.alt = 'beautiful minimalist logo';
// logo.setAttribute('company', 'Bankist');

// const link = document.querySelector('.twitter-link');

// logo.classList.add('c');
// logo.className.remove('c');

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("Great! you are reading the heading");

  h1.removeEventListener('mouseenter', alertH1);
});

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// BUBBLING AND CAPTURING

// 1- capturing phase- whenever we click on any Element, then this phase is started at the root of the Document. 

// document--> Element<html> --> Element<body> --> element<section> --> element <p> --> element <a>, here target phase starts 

// then the bubbling phase starts, in which the event simply bubbles up to the top and reach the root of the document

// const randomInt = (min, max) => Math.floor(Math.random()* (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
// })

document.querySelectorAll('.nav__link').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  })
})

document.querySelector('.nav__links').addEventListener('click', function(e) {

  if(e.target.classlist.contains)
})

// DOM traversing 

const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.getElementsByClassName.color = 'white';

h1.lastElementChild.getElementsByClassName.color = 'orangered';

console.log(h1.parentNode);

console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';


console.log(h1.previousElementSibling);

console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);


// Tabbed componnnt

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classlist.add('operations__tab--active');

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classlist.add('operations__content--active');
})

navigator.addEventListener('mouseover', function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelector('.nav__link');
    const logo = link.closest('.nav').querySelector('.nav__link');

    siblings.forEach(el => {
      if (el != link) el.style.opacity = .5;
    });
    logo.style.opacity = 1;
  }
})


navigator.addEventListener('mouseout', function(e) {
  
})

// Menu fade animation

const handleHover = function(e, opacity) {

};

navigator.addEventListener('mouseover', function(e) {
  handleHover(e, 0.5);
});

// Sticky navigation feature

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function(e) {
  if (this.window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  }
});

const obsCallback = function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  })
}

const obsOptions = {
  root: null, 
  threshold: 0.1,
}

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

const header = document.querySelector('.header');

const navHieght = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
});

headerObserver.observe(header);