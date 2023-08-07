function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    let boatRentPrice = 0;

    switch (season) {
        case "Spring":
            boatRentPrice = 3000; break;
        case "Summer":
        case "Autumn":
            boatRentPrice = 4200; break;
        case "Winter":
            boatRentPrice = 2600;
    }

    if (fishermanCount <= 6) {
        boatRentPrice *= 0.90;
    } else if (fishermanCount <= 11) {
        boatRentPrice *= 0.85;
    } else if (fishermanCount >= 12) {
        boatRentPrice *= 0.75;
    }

    if (fishermanCount % 2 === 0 && season !== "Autumn") {
        boatRentPrice *= 0.95;
    }

    if (budget >= boatRentPrice) {
        console.log(`Yes! You have ${(budget - boatRentPrice).toFixed(2)} leva left.`);
    } else if (budget < boatRentPrice) {
        console.log(`Not enough money! You need ${(boatRentPrice - budget).toFixed(2)} leva.`);
    }
}


fishingBoat(["2000", "Winter", "13"]);