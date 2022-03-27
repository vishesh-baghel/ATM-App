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
