// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require(/* Replace this with the name of your lodown! */);

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

};

var femaleCount;

var oldestCustomer = function(array) {
    var oldestAge = 0;
    var oldestName = '';
    for(var i = 0; i < array.length; i++){
        for(var age in array[i]){
            if(oldestAge < array[i].age) {
                oldestAge = array[i].age;
                oldestName = array[i].name;
            }
        }
    }return oldestName;
};


var youngestCustomer = function(array) {
    var youngestAge = 100;
    var youngestName = '';
    for(var i = 0; i < array.length; i++){
        for(var age in array[i]){
            if(youngestAge > array[i].age) {
                youngestAge = array[i].age;
                youngestName = array[i].name;
            }
        }
    }return youngestName;
};

var averageBalance = function(array) {
    var combinedBalances = 0;
    for (var i =0; i < array.length; i ++) {
        combinedBalances += array[i].balance;
    }
    return combinedBalances;
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
