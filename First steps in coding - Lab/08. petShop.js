function petShop(input) {

    let dogFoodPrice = Number(input[0]);
    let catFoodPrice = Number(input[1]);

    let priceForDogFood = dogFoodPrice * 2.5;
    let priceForCatFood = catFoodPrice * 4;

    let totalPrice = priceForDogFood + priceForCatFood;
    console.log(`${totalPrice} lv.`);
}


petShop(["5", "4"]);