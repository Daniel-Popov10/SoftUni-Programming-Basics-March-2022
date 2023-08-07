function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let stuntManCount = Number(input[1]);
    let priceForCostumes = Number(input[2]);

    let decorPrice = budget * 0.10;
    let costumePrice = stuntManCount * priceForCostumes;

    if (stuntManCount > 150) {
        costumePrice *= 0.90;
    }

    let totalPrice = decorPrice + costumePrice;

    if (budget >= totalPrice) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else if (totalPrice > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`)
    }


}


godzillaVsKong(["9587.88", "222", "55.68"]);