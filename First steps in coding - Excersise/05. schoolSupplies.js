function schoolSupplies(input) {

    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let discount = Number(input[3]);

    let priceForPens = penPacks * 5.80;
    let priceForMarkers = markerPacks * 7.20;
    let priceForDetergent = litersDetergent * 1.20;
    let afterDiscount = discount / 100;

    let totalPrice = priceForPens + priceForMarkers + priceForDetergent;
    let priceAfterDiscount = totalPrice * afterDiscount;
    let finalPrice = totalPrice - priceAfterDiscount;
    console.log(finalPrice);

}

schoolSupplies(["2", "3", "4", "25"]);