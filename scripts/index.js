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