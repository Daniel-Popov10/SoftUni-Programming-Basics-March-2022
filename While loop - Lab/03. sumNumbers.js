function sumNumbers(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let result = 0;
    let sum = 0;


    while (num > sum) {
        result = Number(input[index]);
        index++;
        sum += result;
    }
    console.log(sum);
}


sumNumbers(["100", "10", "20", "30", "40"]);