function numsDivisibleBy9(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let sum = 0;
    let output = "";


    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 9 === 0) {
            sum += i;
            output += i + "\n";


        }

    }
    console.log(`The sum: ${sum}`);
    console.log(output);
}

numsDivisibleBy9(["100", "200"]);