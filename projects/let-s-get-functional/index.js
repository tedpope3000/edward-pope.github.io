// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

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
 *    npm start --prefix ./edward-pope.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */


var maleCount = function(array) {
    var maleCount = _.filter(array, function(customer) {
        return customer.gender === "male";
    });
    return maleCount.length;
}

// var maleCount = function(array) {
//     var count = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].gender === 'male') {
//             count += 1;
//         }
//     }
//     return count;
// }

var femaleCount = function(array){
    var femaleCount = _.reduce(array, function(accumulator, customer){
        accumulator += customer.gender === 'female';
        return accumulator;
    }, 0);
    return femaleCount;
}

// var femaleCount = function(array) {
//     var count = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].gender === 'female') {
//             count += 1;
//         }
//     }
//     return count;
// }

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
    }
    return oldestName;
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
    }
    return youngestName;
};

var averageBalance = function(array) {
    var combinedBalances = 0;
    for (var i =0; i < array.length; i ++) {
        combinedBalances += parseFloat(array[i].balance.slice(1).replace(',', ''));
    }
    return combinedBalances / array.length;
};

var firstLetterCount = function(array, letter) {
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[i].name[0] === letter.toUpperCase()) {
            count += 1;
        }
    }
    return count;
}

var friendFirstLetterCount = function(array, customer, letter) {
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[i].name == customer) {
            for (var j=0;j < array[i].friends.length; j++) {
                if(array[i].friends[j].name[0].toLowerCase() == letter.toLowerCase()) {
                    count += 1;
                }
            }
        }
    }
    return count;
}

var friendsCount = function(array, name) {
    var friendsArr = [];
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === name) {
                friendsArr.push(array[i].name);
            }
        }
    }
    return friendsArr;
}

// var friendsCount = function(array, name){
//     var friendsArr = [];
//     for(var i = 0; i < array.length; i++) {
//         for(var j = 0; j < array[i].friends.length; j++) {
//             if(array[i].name == name) {
//                 var person = array[i].friends[j].name;
//                 friendsArr.push(person);
//             }
//         }
//     }
//     return friendsArr;
// }

// var friendsCount = function(array, name){
//     var friendsArr = [];
//         for(var i = 0; i < array.length; i++){
//             for(var j = 0; j < array[i].friends.length; j++){
//             if(array[i].name == name){
//                 friendsArr.push(array[j].friends.name);
            
//      }
//    }
//  }
//     return friendsArr;
// }


var topThreeTags = function(array) {
    var tagsArray = []
    for(var i = 0; i < array.length; i++) {
        tagsArray.push(array[i].tags);
    }
    
    var allTags = tagsArray.flat();
    
    var tagsObj = allTags.reduce(function(object, value) {
        if (object[value]) {
          object[value] += 1;
        } else {
          object[value] = 1;
        }
        return object;
    }, {});
    
    var tagsEntries = Object.entries(tagsObj);
    var sorted = tagsEntries.sort(function(a, b) { return b[1] - a[1]; })
    var newestArray = sorted.reverse().slice(-3);
    var output = [];
    for (let i = newestArray.length -1; i > -1; i--) {
        output.push(newestArray[i][0]);
    }
    return output;
};

var genderCount = function(array) {
    let counts = array.reduce(function(object, customer) {
        if (object[customer.gender]) {
            object[customer.gender] += 1;
        } else {
            object[customer.gender] = 1;
        }
        return object;
    }, {});
    return counts;
};


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
