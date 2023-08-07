function accountBalance(input) {
    let index = 0;
    let command = input[index];
    let total = 0;
    let increase = 0;

    while (command !== "NoMoreMoney") {
        increase = Number(command);
        index++;
        command = input[index];

        if (increase < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            total += increase;
            console.log(`Increase: ${(increase).toFixed(2)}`);

        }

    }

    console.log(`Total: ${(total).toFixed(2)}`);
}



accountBalance(["120", "45.55", "-150"]);