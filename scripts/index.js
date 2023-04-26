"use strict";

const counter = (num = 0) => {
  let count = num;

  const value = () => {
    return count;
  }

  const increase = () => {
    count++;
  };

  const decrease = () => {
    count--;
  }
};