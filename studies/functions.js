/**
 * FUNCTIONS
 * 0. An overview of functions is provided in the datatypes.js file. This section go into further detail.
 * 
 * 1. The first phase of using functions is to "create" the function, also known as "defining" it.  This means 
 * thinking up a name that's easy to type and easy to remember what purpose it serves. Next is deciding what parameters 
 * it needs (which will need names of their own). 
 * 2. The second phase is putting that function into action by calling it. Now, in place of the parameters, arguments are 
 * entered, and the action is executed. Parameters are x and y. Arguments are what x and y equal.
 * 3. So-called "named" functions exist in relation to anonymous functions. Named functions are usually created for the sake of 
 * called upon later, whereas anonymous functions are the more disposable of the two. Also, named functions are hoisted, but 
 * anonymous are block-scoped:
 * */

const named = function(parameter, func) {
    return function() {
        console.log('Is this not an anonymous function?');
    };
}

/** 
 * 4. The way we assign a function to a variable is the same way we assign anything else to a variable (see variables.js).
 * */

var likeThis = function(parameters) {
    return likeThis(arguments);
};
/**
 * 5. Number five in this section says, "Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value/**
 * How do we specify inputs, and how do we specify outputs?" As you can see in this passage, the word "optionally" is emphasized/**
 * So by optionally taking inputs, they mean you can run a function with nothing in the parentheses. 
 * */

function name()
{
   console.log('Here is a simple example a working function with no inputs.');
}

/** 
 * I think what's meant by the second part of that first sentence is that functions don't always have to spit something out at the end.
 * There are functions like tester functions that sort of just probe data and maybe manipulate it if the conditions are right. In the example
 * below, if the string doesn't include the word, then there's no value returned.
 * */

function hasWord(string, word) {
    if (string.includes(word)) {
        return true
    } 
}

/**
 * We specify inputs by whatever we put in the parentheses (see 4), and outputs are typically specified by a return statement or by logging 
 * something, but these aren't the only outputs or intended results a function can have.
 * 
 * 6. Scope: "Functions can see and modify variables in parent or global scopes. The inverse is NOT true." So to use the following function
 * to demonstrate what this means, the parent scope is the getScore function. That statement on line 70 won't work because the variable 'name'
 * is within the nested function add, but line 68 will work because variables in outer-scopes can be accessed (but not the other way around).
 * */

function getScore() {
    var num1 = 2,
        num2 = 3;
  
    function add() {
        var name = 'Wally';
        return name + ' scored ' + (num1 + num2);
    }
    console.log(name);
    return add();
  }

/** 
 * 7. "Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory 
 * somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures!" If I may editorialize briefly,
 * there are a handful of names given in JavaScript that are very counterintuitive to what they actually are. It's easy to think closure
 * would have something to do with the return statement or a semicolon, or even '}', ']', or ')'.
 * 
 * Turns out, it has to do with accessing a value from a prior function. It's really more of a reopening. Here's a model of what closure
 * looks like from one of our lectures that I found helpful:
 * */

const createPower = (exponent) => {
    return (num) => {
      return num ** exponent;
    };
  };
  
  const cube = createPower(3);
  const square = createPower(2);
  console.log(cube(2));

/**
 * The function "cube" is using closure by referencing a value that was initially part of the function "createPower."
 * 
 * There's obviously a whole lot more to know about functions than just this, but hopefully this provides some kind of 
 * foundation of the basics.
 * */