"use strict";

(function() {
  class Hamburger {
    constructor(size, filling) {
      this.size = size;
      this.filling = filling;
      this.toppings = [];
    }

    static SIZE_SMALL = {
      price: 50,
      calories: 20
    };

    static SIZE_LARGE = {
      price: 100,
      calories: 40
    };

    static FILLING_CHEESE = {
      price: 10,
      calories: 20
    };

    static FILLING_SALAD = {
      price: 20,
      calories: 5
    };

    static FILLING_POTATO = {
      price: 15,
      calories: 10
    };

    static TOPPING_SAUCE = {
      price: 15,
      calories: 0
    };

    static TOPPING_MAYO = {
      price: 20,
      calories: 5
    };

    addTopping(...topping) {
      this.toppings.push(...topping);
    }

    calculatePrice() {
      let totalPrice = this.size.price + this.filling.price;

      for (const topping of this.toppings) {
        totalPrice += topping.price;
      }

      return totalPrice;

    }

    calculateCalories() {
      let totalCalories = this.size.calories + this.filling.calories;

      for (const topping of this.toppings) {
        totalCalories += topping.calories;
      }

      return totalCalories;

    }
  }

  const myHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.FILLING_CHEESE);
  myHamburger.addTopping(Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SAUCE);
  console.log("Price" + " " + myHamburger.calculatePrice());
  console.log("Calories" + " " + myHamburger.calculateCalories());
  console.log(myHamburger);

})();