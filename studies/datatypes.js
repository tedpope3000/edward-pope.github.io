/**
 * DATATYPES (examples of 1-5 below [sigh])
 * 
 * 0. My aunt and uncle used to have a stereo they've had since the '70s. It has a built in 8-track, cassette player, record player, and later 
 * in its life they even added a CD player. It can play all types of formats, but it can't play every one. It's sort of the same situation with 
 * JavaScript: there are a handful of various types of input it can work with, but not necessarily everything. JavaScript expects data to fall into 
 * certain categories, and like my aunt and uncle's stereo, it helps to be handy with each one and to know what it's looking for.  Let's look at some
 * the specific types.
 * 
 * 1. Numbers - With this type, it's not all that unlike a calculator. It recognizes numerical characters and their values, and can execute common 
 * arithmetic in a fairly straightforward way, even accounting for decimals or negative numbers. It also has a arithmetic tool that isn't on most 
 * calculators but comes in handy sometimes, and to use it you use % like you would + or -. If you give it two numbers with % in between, it'll
 * divide one by the other and the number it gives back is the remainder. I'm getting off topic, though. We're focusing on data types. 
 * Examples: 3 , 3.234 , 3e-2, etc.
 * 
 * 2. Strings - Here's where text can be manipulated with JavaScript, but using this type of data is less cut and dry than using numbers is.
 * For one, in order for JavaScript to realize you're working with strings, data has to be in either single or double quotes (turns out it makes zero 
 * difference just as long as you don't do something crazy like "Hello, there' with one of each kind). As you might imagine, it gets a little tricky
 * if you enter a string where part of it already has quotes.
 * Examples: 'hello', 'hello world!', etc
 * 
 * 3. Booleans - These may have already been mentioned (or at least alluded to). This is a type of data that's black or white. Booleans are absolute. 
 * A value is either one or the other, nothing in between. More specifically, the one case is called true and the other is called false. So booleans
 * are useful when you just want a yes or no answer. Is it this, or isn't it? Perfect question for booleans.
 * Examples: true or false
 * 
 * 4. Arrays - Here's where trying to picture what we're talking about becomes a little more abstract. An array is a larger container for multiple 
 * values that are organized in a linear or sequential fashion. The best comparison I can think of is if you've ever seen a complete set of baseball
 * cards. The whole box would be the array, but inside are individual cards with a different player on each one. When you take a card out of 
 * the set and look on the back, there's a number in the corner that shows its order in the deck. Arrays are like that in the sense that each individual
 * value is assigned a number for the sake of keeping an order and a relative position to the whole thing. These assigned numbers are called indexes.
 * Examples: const cars = ['Honda', 'Volvo', 'Audi', 'Jeep']; const person = ['Aaron', 'Alex', 34];
 * 
 * 5. Objects - Hopefully you don't mind the baseball card analogy, because it really seems to work for arrays and objects. An object is another 
 * collection or group or container of smaller values. So with baseball cards, each one will have the guy's name plus other info like home run numbers,
 * hometown, current team, and so on. For these values, there's no intrinsic order. There's no set assignment or sequence for the information, so you
 * can't say look in this exact position on every card for the guy's date of birth, but you know that there's going to be specific information for 
 * each player. This is basically how objects work. A driver's license might work as a good comparison, too, in that objects use the same format for
 * the info where there'll be a general category, like D.O.B, a colon, and then an individual's information specific to that category (so it'd look
 * like D.O.B: 4/10/78). That general category is called a key in JavaScript, and the specific info is called the value.
 * Example: const person = {firstName: 'Alex', lastName: 'Aaron', age: 34};
 * 
 * 6. Functions - In general terms, functions are an entire process. They're a sort of procedure with different components that provide some service
 * in a sense. Again, it's a more abstract and complicated type of data than numbers or booleans. Functions take an input and apply certain conditions 
 * and procedures to it. It's my belief that functions might be the same concept that most people hold for algorithms.
 * Examples:
 * **/

 var averageBalance = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let realNumber = Number(array[i].balance.slice(1).replace(',', ''));
        sum += realNumber
    }
    let averageBal = sum / array.length;
    return averageBal;
};
function firstLetterCount(array, letter) {
    var letterCount = _.filter(array, function(object, i) {
        if (object.name[0] === letter.toUpperCase()) {
            return true;
        }return false;
    });
    return letterCount.length;
}

/**  
 * That reminds me - data types are almost always taught as falling into two categories, simple or complex. If you had to guess, you'd probably do
 * pretty well determining which types of data are the more complicated types, and I have yet to realize why this designation even really matters, but 
 * FYI, some types are simple and some are complex. They're like a boolean value in that way, come to think of it. While I'm at it, I'm supposed to go 
 * into how, when it comes to functions, simple data type parameters work through something called 'by copy', meaning they're more concrete; this
 * is actually this. If a function's parameter represents a complex type of data, that's called 'by reference', because the type of data is more 
 * nebulous, and there's more than a sole component to it. Again, knowing this does nothing to further my big-picture understanding of things, but I
 * have my orders.
 * 
 * But back to functions - here's another analogy that might help provide a better sense of what we're talking about. When I was in my early twenties 
 * and living in Oregon, I had a friend who had been ordered by the State of Washington to blow into a machine they made him put in his car in order 
 * for it to start. So see if this comparison works. His car functioned as a way to get from one place to another. Let's just call his car a function. 
 * There was a whole process or series of things that had to take place in order to use that function. Besides blowing in the machine, he had to put his
 * foot on the brake, turn the key, and then put it into gear while regulating the acceleration and steering. It did something for him, but necessarily
 * so simple all the time. Functions are similar in that there's a type (or types) of input it expects you to provide, which with this data type
 * is called a parameter (or parameters). What that parameter input actually is based on each specific instance is referred to as an argument. So for 
 * my friend, the parameter was his breath, but the argument each time depended on how much alcohol was in his breath each time. The function then
 * runs the argument through whatever its processes are and provides you with the result of it at the end. That's a function in way too many words.
 * 
 * 7. & 8. To make up for my lack of brevity, let's kill two birds with one stone, so to speak. This type of data gets even more abstract. How can it 
 * be considered a type of data when really there's no data in the first place? Such is the case when it comes to the data types null and undefined, 
 * but there's more to it than that. Here's my understanding of the destinction. Undefined shows up when there's a variable in place or something is 
 * expected in a certain place but it's not there. Like if someone were wearing a name tag with no name, you could say that person's name is 
 * undefined. Sometimes I'm supposed to make a function that's supposed to spit out some piece of data, but if I don't do it right, I'll get undefined
 * if I did enough right so it knows it's supposed to say something, but not enough right that it knows what to say.
 * Example: let example; console.log(example); This prints undefined since no value was ever given to the variable.
 * 
 * Null, on the other hand, actually is a value in itself, but it's purpose is usually just to serve as a starting point in place of other 
 * values that are yet to come. It's easy to think of it conceptually as setting something to zero to start out with and going from there. Null provides a baseline
 * value. The reason things are set to null in JavaScript instead of just calling it 0, is that 0 is actually still a number with a value relative to
 * other numbers. Null is more of a baseline placeholder. Zero is more of a number, and undefined means something is missing.
 * Example: let example = null; console.log(example); This prints null but not in quotes or anything since it's its own
 * datatype.
 * 
 * Nine. NaN - I can't tell you what type of data this is, but I sure can tell what type it's not. N-A-N stands for Not a Number, and I feel like that's
 * pretty self-explanatory. Confusingly enough, if you were to ask JavaScript what data type NaN is using its built typeof feature, it tells you not a 
 * number is a number (but it's not). I know I'm still brand new, but I have yet to come across an instance where I couldn't accomplish something 
 * with out the use of NaN, so I don't see the point of diving too deep on this one.
 * Examples: console.log(parseInt("blabla")); console.log(Number(undefined)); console.log(Math.sqrt(-1));
 * console.log(0 * Infinity); console.log(undefined + undefined); console.log('me' / 3);
 * These all print NaN.
 * 
 * And the list of data types goes on . . . There's another type called infinity, for instance. This one actually comes in handy when trying to see things 
 * through to their exterme ends. It's a way to test or evaluate something when considering the most extreme possibilities. If you wanted to go to the 
 * extreme other side of 0, you can probably guess what symbol needs to go before the almighty Infinity expression.
 * 
 * To recap, we've all probably heard someone mention datatypes without knowing for sure what it meant. It turns out what someone's referring
 * to when they mention datatypes is actually a certain TYPE of something, and that something is DATA. 
 */

// [sigh] Let me do some Googling and copy and pasting.

numbers strings booleans arrays objects

// #1.
const number1 = 3;
const number2 = 3.433;
const number3 = 3e5;
// #2. 
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
// #3.
var x = Boolean(expression);     // use this...
var x = !!(expression);          // ...or this
var x = new Boolean(expression);
if ([]) { console.log("[] is truthy")}         // logs "[] is truthy"
if ([] == false) { console.log("[] == false")} // logs "[] == false"
// #4. 
var arr = [1, 2, 3, 4];
console.log(arr.length); // 4
arr[20] = 2; 
console.log(arr.length);
// #5.
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};

/**
 * This assignment is diminishing returns, that's for sure.
 */




https://www.programiz.com/javascript/data-typesc
https://www.w3schools.com/js/js_strings.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
https://www.codingame.com/playgrounds/6181/javascript-arrays---tips-tricks-and-examples
https://www.javascripttutorial.net/javascript-objects/