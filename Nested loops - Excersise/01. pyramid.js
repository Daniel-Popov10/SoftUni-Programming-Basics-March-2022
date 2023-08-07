function printPyramid(input) {
    const getNumInput = Number(input);

    let num = 1;
    let result = '';
    let isBigger = false;

    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= i; j++) {

            if (num > getNumInput) {
                isBigger = true;
                break;
            }
            result += num + ' ';
            num++;
        }
        console.log(result);
        result = '';
        if (isBigger) {
            break;
        }
    }


}

printPyramid(["7"]);