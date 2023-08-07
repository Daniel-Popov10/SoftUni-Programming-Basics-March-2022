function sumOfTwoNums (input){
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let isFound = false;
    let combinationsCounter = 0;
    let numberOne = 0;
    let numberTwo = 0;

    for (let x = firstNum; x <= lastNum; x++) {
        for (let y = firstNum; y <= lastNum; y++) {
            combinationsCounter ++;
           if (x + y === magicNum) {
            numberOne = x;
            numberTwo = y;
          isFound = true;
            break;
           } 
        }

        if(isFound){
            break;
        }
    }

    if (isFound){
        console.log(`Combination N:${combinationsCounter} (${numberOne} + ${numberTwo} = ${magicNum})`);
    } else {
        console.log(`${combinationsCounter} combinations - neither equals ${magicNum}`);
    }
}


sumOfTwoNums(["23","24","20"]);