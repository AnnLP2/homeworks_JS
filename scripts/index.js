"use strict";

(function() {
  const user = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3
        }
      }
    }
  };

  const deepFreeze = (obj) => {
    if (typeof obj !== "object" || Object.isFrozen(obj)) return;

    Object.freeze(obj);

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        deepFreeze(obj[key]);
      }
    }
  };

  deepFreeze(user);

  console.log(Object.getOwnPropertyDescriptors(user));
  console.log(Object.getOwnPropertyDescriptor(user, "data"));
  console.log(Object.getOwnPropertyDescriptor(user.data, "d"));
  console.log(Object.getOwnPropertyDescriptor(user.data.d, "d1"));
})();






