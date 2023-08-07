function traveling (input){
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End"){
        let destination = command;
        let budget = Number(input[index]);
        index++; 
        let SavedMoney = 0;
        
        while (SavedMoney < budget){
            let currentMoney = Number(input[index]);
            index++;
            SavedMoney += currentMoney;
        }

        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
}

}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);