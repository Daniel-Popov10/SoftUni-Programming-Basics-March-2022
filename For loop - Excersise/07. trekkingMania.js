function trekking(input) {
    let groupsCount = Number(input[0]);

    let totalClimbers = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let index = 1; index <= groupsCount; index++) {

        let groupNumber = Number(input[index]);
        totalClimbers += Number(input[index]);

        if (groupNumber <= 5) {
            musala += Number(input[index]);
        } else if (groupNumber <= 12) {
            monblan += Number(input[index]);
        } else if (groupNumber <= 25) {
            kilimanjaro += Number(input[index]);
        } else if (groupNumber <= 40) {
            k2 += Number(input[index]);
        } else if (groupNumber >= 41) {
            everest += Number(input[index]);
        }

    }
    console.log(`${(musala / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(everest / totalClimbers * 100).toFixed(2)}%`);

}



trekking(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);