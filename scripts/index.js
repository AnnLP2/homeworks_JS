"use strict";

(function() {
  function getSumOfGoodsPrice(goods) {

    if (!Array.isArray(goods)) throw new Error("It should be an array!");

    const goodsMap = new Map();

    goods.forEach(([good, price]) => {
      goodsMap.set(good, price);
    });

    let sum = 0;

    for (const price of goodsMap.values()) {
      sum += price;
    }

    return sum;
  }

  const goods = [["футболка", 15], ["шорты", 25], ["носки", 5]];
  const goods1 = [["платье", 30], ["джинсы", 50], ["штаны", 10]];
  console.log(getSumOfGoodsPrice(goods));
  console.log(getSumOfGoodsPrice(goods1));

})();