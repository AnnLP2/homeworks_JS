"use strict";

(function() {
  function createIterator(array) {
    let index = 0;

    const next = () => {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { done: true };
      }
    };

    return {
      next: next
    };
  }

  const arr = [10, 20, 30, 40, 50];
  const iterator = createIterator(arr);

  const result = setInterval(() => {
    const currentObj = iterator.next();
    if (currentObj.done) {
      clearInterval(result);
      return;
    }

    console.log(currentObj);
  }, 300);

})();