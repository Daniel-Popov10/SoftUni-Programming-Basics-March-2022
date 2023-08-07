function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workHours = Number(input[3]);

    let priceForNylon = (nylon + 2) * 1.50;
    let extraPaint = paint * 0.10;
    let priceForPaint = (paint + extraPaint) * 14.5;
    let priceForThinner = thinner * 5;
    let totalPrice = priceForNylon + priceForPaint + priceForThinner + 0.40;
    let priceForWork = (totalPrice * 0.30) * workHours;
    let finalPrice = totalPrice + priceForWork;

    console.log(finalPrice);
}


repainting(["10 ", "11", "4", "8"]);