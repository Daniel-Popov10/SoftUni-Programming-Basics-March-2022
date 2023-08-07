function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let totalToysCount = puzzleCount + talkingDollsCount + teddyBearsCount + minionsCount + trucksCount;

    let puzzlePrice = puzzleCount * 2.60;
    let talkingDollPrice = talkingDollsCount * 3;
    let teddyBearsPrice = teddyBearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let finalPrice = puzzlePrice + talkingDollPrice + teddyBearsPrice + minionsPrice + trucksPrice;

    if (totalToysCount >= 50) {
        finalPrice *= 0.75;
    }

    let rent = finalPrice * 0.10;

    let totalPrice = finalPrice - rent;

    if (totalPrice >= tripPrice) {
        console.log(`Yes! ${(totalPrice - tripPrice).toFixed(2)} lv left.`);
    } else if (totalPrice < tripPrice) {
        console.log(`Not enough money! ${(tripPrice - totalPrice).toFixed(2)} lv needed.`);
    }

}


toyShop(["40.8", "20", "25", "30", "50", "10"]);





