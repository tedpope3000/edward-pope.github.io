// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  return array.reduce(function(x, y) { 
    return x.concat(y);
  });
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  if (test(value)) {
    body(value);
    return loop(update(value), test, update, body);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  let answer = true;
    if (test) {
        if (Array.isArray(array)) {
            for (var i = 0; i < array.length; i++) {
                if (!test(array[i], i, array)) {
                    answer = false;
                }
            }
        } else {
            for (let key in array) {
                if(!test(array[key], key, array)) {
                    answer =false;
                }
            }
        } 
    } else {
        if (Array.isArray(array)) {
            for (let i = 0; i < array.length; i++) {
                if (!array[i]) {
                    answer = false;
                }
            }
        } else {
            for (let key in array) {
                if (!array[key]) {
                    answer = false;
                }
            }
        }
    }
    return answer;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({name}) => name != 'none');
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
    }
  }

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
