"use strict";

void function() {
  const exampleArr = [1, 2, [3, [4, 5, 6, [7, 8]]]];
  const flat = (...args) => {
    if (args.length !== 1) throw new Error("Function accepts only 1 argument, too much arguments provided");
    const [arr] = args;
    const resultArr = [];

    const flatter = (arr) => {
      for (const item of arr) {
        !Array.isArray(item) ? resultArr.push(item) : flatter(item);
      }
    };
    flatter(arr);
    return resultArr;
  };

  console.log(flat(exampleArr));
}();


