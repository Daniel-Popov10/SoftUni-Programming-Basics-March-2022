function shopping(input) {
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let priceForGPU = GPU * 250;
    let priceForCPU = priceForGPU * 0.35 * CPU;
    let priceForRAM = priceForGPU * 0.10 * RAM;

    let totalPrice = priceForGPU + priceForCPU + priceForRAM;

    if (GPU > CPU) {
        totalPrice *= 0.85;
    }


    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else if (totalPrice > budget) {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }

}



shopping(["900", "2", "1", "3"]) 