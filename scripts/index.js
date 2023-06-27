"use strict";

(function() {
  function Student(firstName, lastName, birthYear, lessonsCount = 10) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.lessonsCount = lessonsCount;
    this.attendance = Array(lessonsCount);
    this.marks = Array(lessonsCount);
  }

  Student.prototype.getAge = function() {
    return new Date().getFullYear() - this.birthYear;
  };

  Student.prototype.present = function() {
    const filledSlotsCount = Object.keys(this.attendance).length;
    if (filledSlotsCount >= this.lessonsCount) {
      throw new Error("No more lessons!");
    }
    this.attendance[filledSlotsCount] = true;
  };

  Student.prototype.absent = function() {
    const filledSlotsCount = Object.keys(this.attendance).length;
    if (filledSlotsCount >= this.lessonsCount) {
      throw new Error("No more lessons!");
    }
    this.attendance[filledSlotsCount] = false;
  };

  Student.prototype.mark = function(mark) {
    const filledSlotsCount = Object.keys(this.attendance).length;
    if (typeof this.marks.at(-1) === "number") {
      throw new Error("Marks for all lessons are present!");
    }
    if (typeof mark !== "number" || mark < 0 || mark > 10) {
      throw new Error("Mark should be a number between 0 and 10");
    }
    if (this.attendance[filledSlotsCount - 1]) {
      this.marks[filledSlotsCount - 1] = mark;
    }
  };

  Student.prototype.summary = function() {
    const lessonsTookPlaceCount = this.attendance.filter((val) =>
      [true, false].includes(val)
    ).length;
    const visitedLessonsCount = this.attendance.filter((val) => val).length;
    const avgAttendance = visitedLessonsCount / lessonsTookPlaceCount;

    const marksCount = this.marks.filter((val) => typeof val === "number").length;
    const marksTotal = this.marks.reduce((acc, mark) => acc + mark);
    const avgMark = Number(marksTotal / marksCount).toFixed(1);

    const goodAvgMark = 9;
    const goodAvgAttendance = 0.9;

    if (avgMark > goodAvgMark && avgAttendance > goodAvgAttendance) {
      return "Ути, какой молодчинка!";
    }
    if (avgMark < goodAvgMark && avgAttendance < goodAvgAttendance) {
      return "Ты редиска!";
    }
    return "Норм, но можно лучше!";
  };

  const anna = new Student("Anna", "Polishchuk", 1990);
  anna.present();
  anna.present();
  anna.present();
  anna.absent();
  anna.absent();
  anna.present();
  anna.mark(4);
  anna.present();
  anna.present();
  anna.present();
  anna.present();
  anna.mark(4);
  const res = anna.summary();
  console.log(res);

})();
