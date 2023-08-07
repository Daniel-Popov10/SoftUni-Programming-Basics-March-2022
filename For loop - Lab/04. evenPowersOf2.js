function evenPowers(input) {
    let num = Number(input[0]);
    let result = 0;
    for (let i = 0; i <= num; i += 2) {
        result = Math.pow(2, i);
        console.log(result);
    }
}

evenPowers(["6"]);