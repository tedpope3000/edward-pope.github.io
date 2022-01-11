 /* VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* 4. var, let, and const
The way I've come to understand the difference between these three starts with knowing that var is
essentially the antiquated way of declaring a variable, because it isn't block scoped like the other
two are. In other words, there's a greater possibility of accidentally calling the wrong var from a 
distant part of the code.

Therefore, we're supposed to use let and const now instead. The variable let is best used for a 
specific block of code or for more local use. It's like a temporary placeholder, and it reduces 
the possiblity of accidental reassignment or miscall.

Using const provides the same protections, but the biggest difference is that const must be assigned
a value immediatly. With var and let, you can do something like this just to create a variable to be
assigned a value later:*/
var ted;
let pope;
/* but not so with const, again with the idea of reducing misplaced variables.

5. Hoisting
Hoisting variables has to do with where in their scope variables are declared and assigned. 
The let and const variables won't get hoisted out of their scope. Here's what I mean: */

if (true) {
    const a = 10;
  }
  console.log(a);

  if (true) {
    let a = 10;
  }
  console.log(a);

  if (true) {
    var a = 10;
  }
  console.log(a);

  /* The first two will give you an error telling you a is not defined, but using var the 
  number 10 gets hoisted out of that block so that code prints 10. */



