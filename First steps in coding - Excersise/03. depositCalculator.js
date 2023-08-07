function depositCalculator(input) {

    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yearlyPercent = Number(input[2]);

    let sum = depositedSum + depositPeriod * (depositedSum * yearlyPercent / 100) / 12;

    console.log(sum);
}

depositCalculator(["200", "3", "5.7"]);