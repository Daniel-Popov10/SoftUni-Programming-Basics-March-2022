function invalidNum(input) {
    let num = Number(input[0]);


    if (num >= 100 && num <= 200 || num === 0) {
    } else {
        console.log("invalid");
    }

}


invalidNum(["199"])