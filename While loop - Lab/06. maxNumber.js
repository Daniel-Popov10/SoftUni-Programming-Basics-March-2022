function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;


    let maxNum = Number(input[0]);

    while (command !== "Stop") {
        let num = Number(command);

        if (maxNum < num) {
            maxNum = num;
        }

        command = input[index];
        index++;



    }
    console.log(maxNum)
}



maxNumber(["100", "99", "80", "70", "Stop"]);