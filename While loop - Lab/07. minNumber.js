function minNumber(input) {
    let index = 0;
    let minNum = Number(input[0]);
    let command = input[index];
    index++;

    while (command !== "Stop") {
        let num = Number(command);
        command = input[index];
        index++;

        if (minNum >= num) {
            minNum = num;
        }

    }
    console.log(minNum);
}

minNumber(["100", "99", "80", "70", "Stop"]);