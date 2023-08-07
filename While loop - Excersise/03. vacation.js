function vacation(input) {
    let moneyForVacation = Number(input[0]);
    let index = 1;
    let availableMoney = Number(input[index]);
    index++;
    let action = input[index];
    let spendDays = 0;
    let days = 0;

    while (availableMoney <= moneyForVacation) {
        action = input[index];
        index++;
        let currentMoney = Number(input[index]);
        index++;
        days++;

        if (action === "save") {
            spendDays = 0;
            availableMoney += currentMoney;
        } else if (action === "spend") {
            availableMoney -= currentMoney;
            spendDays++;
            if (availableMoney <= 0) {
                availableMoney = 0;
            }
        }

        if (spendDays >= 5) {
            console.log("You can't save the money.");
            console.log(days);
            break;
        } else if (availableMoney >= moneyForVacation) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }

    }

}

vacation(["250",

    "150",

    "spend",

    "50",

    "spend",

    "50",

    "save",

    "100",

    "save",

    "100"]);