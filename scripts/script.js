"use strict";

(function() {
  function Student(firstName, lastName, birthDate, lessonsCount = 10) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.lessonsCount = lessonsCount;

    this.attendance = new Array(this.lessonsCount);
    this.marks = new Array(this.lessonsCount);

    this.currenLesson = 0;
  }

  Student.prototype.setAttendance = function(attended, nextLesson = true) {
    if (this.lessonsCount === this.currenLesson) return;
    this.attendance[this.currenLesson] = attended;
    nextLesson ? this.currenLesson += 1 : null;
  };

  Student.prototype.present = function(mark = null) {
    if (mark !== null && !this.validateMark(mark)) return;

    this.setAttendance(true, mark === null);

    if (mark !== null) {
      this.mark(mark);
      this.currenLesson += 1;
    }
  };

  Student.prototype.absent = function() {
    this.setAttendance(false);
  };

  Student.prototype.mark = function(mark) {
    if (!this.validateMark(mark)) return;
    this.marks[this.currenLesson - 1] = mark;
  };
  Student.prototype.validateMark = function(mark) {
    if (mark >= 0 && mark <= 10) return true;
    console.warn("Wrong mark");
    return false;
  };


  Student.prototype.avgAttd = function() {
    const sum = this.attendance.reduce((acc, item) => {
      if (typeof item === "boolean" && item === true) acc += 1;
      return acc;
    }, 0);

    if (this.currenLesson > 0) {
      return sum / this.currenLesson;
    }

    return 1;
  };

  Student.prototype.avgMark = function() {
    const { sum, lessonsCount } = this.marks.reduce((acc, item) => {
        if (typeof item === "number") {
          acc.sum += item;
          acc.lessonsCount += 1;
        }
        return acc;
      },
      {
        sum: 0,
        lessonsCount: 0
      }
    );

    return Math.round(sum / lessonsCount);
  };

  Student.prototype.summary = function() {
    return {
      avgMark: this.avgMark(),
      avgAttd: this.avgAttd()
    };
  };


  const st = new Student("Vova", "Shaitan", "01.02.1997", 10);


  st.present(1);
  st.present(10);
  st.present(3);
  st.present(5);
  st.present(10);
  st.present(10);
  st.present(6);
  st.absent();
  st.absent();
  st.absent();
  console.log(st.avgAttd());
  console.log(st.avgMark());


  console.log(st);
})();


