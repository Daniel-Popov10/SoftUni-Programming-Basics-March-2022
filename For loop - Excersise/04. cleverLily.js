function cleverLily(input) {
    let lilyAge = Number(input[0]);
    let washingMachineprice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCount = 0;
    let savedMoney = 0;
    let receivedMoney = 0;
    let takenMoney = 0;


    for (let index = 1; index <= lilyAge; index++) {

        if (index % 2 === 0) {
            receivedMoney += 10;
            savedMoney += receivedMoney;
            takenMoney++;
        } else if (index % 2 !== 0) {
            toysCount++;
        }

    }

    let finalToysPrice = singleToyPrice * toysCount;
    let totalMoney = (finalToysPrice + savedMoney) - takenMoney;

    if (totalMoney >= washingMachineprice) {
        console.log(`Yes! ${(totalMoney - washingMachineprice).toFixed(2)}`);
    } else if (washingMachineprice > totalMoney) {
        console.log(`No! ${(washingMachineprice - totalMoney).toFixed(2)}`);
    }

}


cleverLily(["21", "1570.98", "3"]);