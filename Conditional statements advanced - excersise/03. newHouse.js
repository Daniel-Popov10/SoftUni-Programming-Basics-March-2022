function newHouse(input) {
    let flowerType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (flowerType) {
        case "Roses":
            price = flowersCount * 5;
            if (flowersCount > 80) {
                price *= 0.90;
            } break;
        case "Dahlias":
            price = flowersCount * 3.80;
            if (flowersCount > 90) {
                price *= 0.85;
            } break;
        case "Tulips":
            price = flowersCount * 2.80;
            if (flowersCount > 80) {
                price *= 0.85;
            } break;
        case "Narcissus":
            price = flowersCount * 3;
            if (flowersCount < 120) {
                price *= 1.15;
            } break;
        case "Gladiolus":
            price = flowersCount * 2.50;
            if (flowersCount < 80) {
                price *= 1.20;
            } break;
    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`);
    } else if (budget < price) {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }

}


newHouse(["Gladiolus", "64", "160"]);