function skiTrip(input) {
    let daysOfStay = Number(input[0]) - 1;
    let typeOfRoom = input[1];
    let review = input[2];
    let price = 0;

    switch (typeOfRoom) {
        case "room for one person":
            price = daysOfStay * 18;
            break;
        case "apartment":
            price = daysOfStay * 25;
            if (daysOfStay < 10) {
                price *= 0.70;
            } else if (daysOfStay >= 10 && daysOfStay <= 15) {
                price *= 0.65;
            } else if (daysOfStay > 15) {
                price *= 0.50;
            }
            break;
        case "president apartment":
            price = daysOfStay * 35;
            if (daysOfStay < 10) {
                price *= 0.90;
            } else if (daysOfStay >= 10 && daysOfStay <= 15) {
                price *= 0.85;
            } else if (daysOfStay > 15) {
                price *= 0.80;
            }
            break;
    }

    if (review === "positive") {
        price *= 1.25;
    } else if (review === "negative") {
        price *= 0.90;
    }

    console.log(price.toFixed(2));
}

skiTrip(["30", "president apartment", "negative"]);