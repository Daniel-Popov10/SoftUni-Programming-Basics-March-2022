function fishTank(input) {

    let lenght = Number(input[0]);
    let weight = Number(input[1]);
    let hight = Number(input[2]);
    let percent = Number(input[3]);

    let totalVolume = lenght * weight * hight;
    let liters = totalVolume / 1000;
    let percentageTaken = percent / 100;
    let finalPercentage = liters * (1 - percentageTaken);

    console.log(finalPercentage);

}


fishTank(["85 ", "75", "47", "17"]);