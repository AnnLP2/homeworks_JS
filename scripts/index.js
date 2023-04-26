"use strict";


function bind(fn, thisArg, ...bindArgs) {

  return function(...args) {
    return fn.call(thisArg, ...bindArgs, ...args);
  };
}

const foo = function() {
  console.log(this);
};

const boundedFoo = bind(foo, [1, 2, 3, 4]);
boundedFoo();


