/*
LOOPS

0. The simplest way to explain loops is that they're a way to retrieve whatever it is you're looking for in a given collection of data. Loops can
be built to seek out one thing in particular, or to go through the collection, retrieve what you want, then go back in again and do it all over 
until you want it to stop.

1. While Loops - If we were to translate what a while loop does into more plain-spoken language, it might read like this: "For as long is this
is the case, I want you to do this. You can stop once it gets to this point." The following example is essentially saying, "So long as the number 
is no bigger than ten, start at zero and log every number one at a time."
*/
 
let number = 0;

while (number < 10) {
  number += 1;
  console.log(number);
}

/* 
The first time through, it'll add one to the number that had existed until then. This while function, if we can call it that, says once you've done this,
start over and do it again until the stated limit has been reached.

2. For Loops - We use these the most to examine arrays. To me, I think the structure and term used could've been done more logically. I'd have done it like this:
scan(start, amount of movement, end) {do this along the way}. Instead, it's set up like this: for(start, end, amount of movement) {this is the 
same}, where start and end are index values, and how much you want to move one way or another between the one index and the other is given last.
In most cases, you just want to go through the whole thing top to bottom, and it doesn't matter if it's from a to z or z to a. If you want to 
start at the beginning, it looks like this:
*/

for(var i = 0; i < array.length; i++) {do this while going through it} // From back to front it's like this:

for(var i = array.length - 1; i > -1; i--) {etc} //Worth noting is that a variable needs to be declared and each step of the process is separated
// by semicolons instead of commas. At first, I was writing it like this (i = array, and so forth).

/* 
3. For-In Loops - This is how to loop over an object, and the statement reads like this: To go through all the details (this is the 'for' part) 
of (the 'in') this object (this thing changes depending on the object) { (and here's where you can say what to once you're in there)}. So say 
the object is called 'id' and it has all the key-value pairs a state ID card does. If you were to run a for-in loop on id, it would look like this:
*/

var id = {
  first: 'Ted',
  last: 'Pope',
  address: '1405 Terpsichore'
};
for (var key in id) {
 console.log(id[key]);
} 
// Logs just the values of that ID

/*
4. Loops! I'd say they're either more directly behind most of what we do in bootcamp, or at least in the fabric of most of 
what we do. This is the strongest example of bending what we're trying to do into the tools we're given. We take the logic
and characteristics of loops and apply it in a way that suits our purpose.
*/