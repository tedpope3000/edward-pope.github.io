   /* STRING MANIPULATION:
  
   0. Strings are just one of the several various data types, as noted in the datatypes.js page. Sometimes, it's 
   necessary to change a string or have the string itself be able to adapt to receiving varying inputs. Sometimes 
   only certain parts of the string need to be accessed or examined, so that's when string methods can be handy.
  
   1. Manipulating a string with an operator means using one of the previously described operators, like = or + to 
   change the nature of a string. An easy example of this would be something that looks like this:
   */
 
   var string = 'My ' + hometown + 'is in the state of ' + state + '.' 
   //Here we're assuming hometown and state have been defined elsewhere.
 
   /*
   2. String methods are a more sophisticated way of manipulating strings. These methods are built into JavaScript, 
   and it helps to remember that each character and space in a string has an index just like each value in an array does. 
   There are dozens of string methods, and they do everything from searching the string for something specific to 
   converting the nature of the string, to making new strings from selected pieces of existing strings. There are
   way too many to list and describe here, but if you want a comprehensive listing and explanation of each method, 
   I've found this site to be useful: https://www.w3schools.com/jsref/jsref_obj_string.asp. 
   I'll demonstrate a couple of string methods just to give you an idea. For example, sometimes you may be working with 
   data where whether or not a letter is upper case or lower case doesn't matter, but to the function, a capitalized 
   letter is a completely different thing than the lower case version. So to eliminate any confusion, you can employ a method 
   that will convert everything to a single format. toLowerCase and toUpperCase both do that. Here's how it looks in practice. 
   */
  
   var string1 = 'Ted Pope';
   console.log(string1.toLocaleLowerCase()); // 'ted pope'
   console.log(string1.toUpperCase()); // 'TED POPE' 
  
   /* The method 'includes' will search a whole string from beginning to end and see if whatever it is you're looking for is in there anywhere. So say 
   you had an article that was all about the best restaurants in New Orleans, and you wanted to find out if your favorite was mentioned, but you
   don't feel like looking over the whole article to see if it's in there or not. You could just copy and paste the entire article into the Replit 
   site we use in between two quotation marks, and make that string a variable (which we'll pretend is called article). Then you could see if it 
   was mentioned like this:
   */
   
   var article = '';
   article.includes('Antoine\'s'); // and if that name is in there, you'll get true as the result.

   /* Using a method called split will convert a string into an array, and what you put in quotes in the parentheses will be
    * where the different values in the array are separated. */

   var marxBrothers = 'Groucho, Harpo, Chico, Zeppo'; 
   return marxBrothers.split(','); // returns [Groucho. Harpo, Chico, Zeppo]
