'use strict';

function totalCostPotatoes(borschLiters, onePotatoWeight, potatoesForLiter, pricePerKgPotato) {
    const oneBorschLiter = onePotatoWeight * potatoesForLiter;
    const totalWeightPotatoes = Math.ceil(oneBorschLiter * borschLiters);
    return pricePerKgPotato * totalWeightPotatoes;
}

console.log(totalCostPotatoes(48, 0.075, 4,13 ));