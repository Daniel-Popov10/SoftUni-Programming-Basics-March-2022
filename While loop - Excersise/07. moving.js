function moving(input) {
    let apartmentWidth = Number(input[0]);
    let apartmentLength = Number(input[1]);
    let apartmentHeight = Number(input[2]);
    let totalSpace = apartmentWidth * apartmentLength * apartmentHeight;

    let index = 3;

    let command = input[index];
    let spacePerBox = 0;

    while (command !== "Done") {
        spacePerBox += Number(command);
        index++;
        command = input[index];

        if (totalSpace < spacePerBox) {
            console.log(`No more free space! You need ${Math.abs(totalSpace - spacePerBox)} Cubic meters more.`);
            break;
        } else if (command === "Done") {
            console.log(`${Math.abs(totalSpace - spacePerBox)} Cubic meters left.`)
        }
    }

}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);