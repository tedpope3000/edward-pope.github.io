/* OPERATORS
 
 0. Operators in this sense are familiar to anyone who's ever used a basic calculator. They are the symbols that go in between two variables 
 and produce some result when executed.
 
 1. Arithmetic operators are symbols like plus (+), minus (-), multiply (*), and divide (/). 
 
 2. Assignment operators are a little different. On the calculator and in math class, the equals sign (=) means whatever was on one side of it is
 the same as what is on the other. It represents an absolute match. In JavaScript, though, that same symbol is used as a tool for designation. It's
 a way to set one thing to whatever's on the other side of that symbol. Another handy assignment operator looks like this: += and it means the value
 on the right side will be added to the value on the left side of that operator. Here's an example:
 */
 
 let x = 100;
 x += 7; 

/* Now the value of x is 107.

3. Comparison operators, for the most part, are symbols that do things that the average person in elementary school math class did in math. This
category includes greater than and less than (> and <), and greater than or equal to and less than or equal to (>= and <=). There are also a 
couple that most people aren't as familiar with that fall into this group, too, and they get used all the time in JavaScript. Three equals signs
together (===) does the job that was traditionally done my just one equals sign, meaning one side is exactly the same as the other. An exclamation
point and an equals sign (!==) means whatever is on either side of it is not equal.
 
4. Logical operators take conjunctions and turn them into symbols of logic that can be entered into formulas. For instance, two ampersands together
(&&) represents the word "and". This is useful for conditional statements where more than one element is needed to qualify for the condition in question.
Similarly, two vertical lines (||) represents the word "or". The third logical operator is a sole exclamation point (!), and you can think of it as 
doing the job of the word "not".

5. Unary operators start to venture into territory that seems uncharacteristic of the other operators we've seen up to this point. Controversially,
the logical operator "!" is also considered a unary operator. What's known as the unary plus sign will take a value that may not be a number and
turn it into one if it's clear what that number would be, so it's a good way to convert data types. For instance, if five was written '5', it's 
considered a string even though it's pretty clearly the number five. But adding the unary plus sign to it (+'5') converts it to number, however it's
not smart enough to make +'five' into 5. This same operator can also convert booleans into binary values, so +true becomes a 1 and +false turns into 0.

What makes unary operators seem dissimilar to the others is the the operators start to become words in some instances, and in these instances, the 
operator no longer has a value on either side. Examples of these operators in text form are "typeof" which provides a variable's data type, and 
"delete" which does what you'd think. In practice, they would look like this:
*/
typeof true; //(which it tells you is boolean) or 
typeof {name: 'Joe'}; //(comes back as an object)

/**
6. The ternary operator is basically a shortcut to an if-else statement. First comes the condition, then the if becomes a question mark, followed by
the result of the condition being met, a colon, then the result otherwise. Let me just show you.

This:
*/

function doorman(age) {
  if (age >= 21) {
    return 'Come on in!';
  } else
    return 'You are too young to drink';
} 

// does the same thing as this:

let doorman = age >= 21 ? 'Come on in!' : 'You are too young to drink';

// except the big difference is age has to be defined outside that expression in the latter example.

