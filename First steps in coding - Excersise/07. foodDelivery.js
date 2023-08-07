function foodDelivery(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let priceForChicken = chickenMenu * 10.35;
    let priceForFish = fishMenu * 12.40;
    let priceForVegetarian = vegetarianMenu * 8.15;

    let totalPrice = priceForChicken + priceForFish + priceForVegetarian;
    let desert = totalPrice * 0.20;
    let finalPrice = totalPrice + desert + 2.50;

    console.log(finalPrice);
}


foodDelivery(["2", "4", "3"]);