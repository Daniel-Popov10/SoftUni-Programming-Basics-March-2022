function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let inputL = input.length

    let points = 0;
    let wins = 0;

    for (let index = 2; index < inputL; index++) {
        let stage = input[index];

        switch (stage) {
            case "W":
                points += 2000;
                wins++;
                break;
            case "F":
                points += 1200;
                break;
            case "SF":
                points += 720;
                break;
        }

    }

    let finalPoints = points + startingPoints;
    let averagePoints = points / tournamentsCount;
    let winPercentage = wins / tournamentsCount * 100;

    console.log(`Final points: ${(finalPoints)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${(winPercentage).toFixed(2)}%`);
}


tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);