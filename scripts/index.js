"use strict";

(function() {
  function printGreetings(students) {
    for (const { name, subject } of students) {
      console.log(`Привет, ${name}! Ты изучаешь предмет ${subject}`);
    }
  }

  const students = [
    { name: "John", age: 20, subject: "Math" },
    { name: "Alice", age: 22, subject: "English" },
    { name: "Bob", age: 21, subject: "History" }
  ];

  printGreetings(students);

})();