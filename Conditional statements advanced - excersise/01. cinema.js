function cinema(input) {
    let projectionType = input[0];
    let seatRows = Number(input[1]);
    let seatColums = Number(input[2]);

    let price = 0;

    switch (projectionType) {
        case "Premiere":
            price = 12; break;
        case "Normal":
            price = 7.50; break;
        case "Discount":
            price = 5; break;
    }

    let finalPrice = price * seatRows * seatColums;

    console.log(`${(finalPrice).toFixed(2)} leva`);
}


cinema(["Discount", "12", "30"]);