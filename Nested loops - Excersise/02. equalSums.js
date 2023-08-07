function equalSums(input) {


    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let timesToLoop = Math.abs(firstNum - secondNum);

    let result = [];

    for (let i = 0; i <= timesToLoop; i++) {
        let parseNum = firstNum.toString();
        let sumEven = 0;
        let sumOdd = 0;
        for (let j = 0; j < parseNum.length; j++) {
            let currentNum = Number(parseNum[j]);
            if (j % 2 === 0) {
                sumEven += currentNum;
            } else {
                sumOdd += currentNum;
            }

        }

        if (sumEven === sumOdd) {
            result.push(firstNum);
        }
        firstNum++;
    }

    console.log(result.join(' '));
}

equalSums(["100000",
    "100050"])
