"use strict";

(function() {
  function saveGrades(student, grades) {
    const studentWeakMap = new WeakMap();
    return studentWeakMap.set(student, grades);
  }

  const student = { name: "Иван Иванов" };
  const grades = { math: 90, fiz: 85, eng: 95 };

  console.log(saveGrades(student, grades));

})();