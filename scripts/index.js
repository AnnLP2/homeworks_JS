"use strict";

const counter = (num = 0) => {
    let count = num;
    let statistic = {valueCalls: 0, increaseCalls: 0, decreaseCalls: 0};
    return {
        value() {
            statistic.valueCalls++;
            return count;
        },

        increase() {
            statistic.increaseCalls++;
            count++;
        },

        decrease() {
            statistic.decreaseCalls++;
            count--;
        },

        getStatistic() {
            return statistic;
        },

        reset() {
            count = num;
            Object.keys(statistic).forEach(key => {statistic[key] = 0});
        }

    }
};

const counter1 = counter(5);
const counter2 = counter(2);
counter1.decrease();
counter1.increase();
counter1.increase();
counter1.decrease();
counter1.decrease();
console.log(counter1.value());
console.log(counter1.getStatistic());
counter1.reset();
console.log(counter1.getStatistic());
console.log(counter1.value());
console.log(counter2.value());
counter2.decrease();
counter2.increase();
counter2.increase();
console.log(counter2.getStatistic());
counter2.reset();
console.log(counter2.getStatistic());
console.log(counter2.value());