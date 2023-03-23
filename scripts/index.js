'use strict';

function totalCostPotatoes(borschLiters) {
    const onePotatoWeight = 0.075;
    const oneBorschLiter = onePotatoWeight * 4;
    const pricePerKgPotato = 13;
    const totalWeightPotatoes = Math.ceil(oneBorschLiter * borschLiters);
    return pricePerKgPotato * totalWeightPotatoes;
}

console.log(totalCostPotatoes(48));