function cake(input) {
    let index = 0;
    let cakeWidth = Number(input[index]);
    index++;
    let cakeLength = Number(input[index]);
    let totalPieces = cakeWidth * cakeLength;
    index++;
    let command = input[index];


    while (command !== "STOP") {
        totalPieces -= command;
        index++;
        command = input[index];

        if (totalPieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        } else if (command === "STOP") {
            console.log(`${totalPieces} pieces are left.`)
        }
    }

}


cake(["10", "2", "2", "4", "6", "STOP"]);