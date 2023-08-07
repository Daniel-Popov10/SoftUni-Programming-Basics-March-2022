function multiplication(input) {
    let multiplier = Number(input[0]);

    for (let num = 1; num <= 10; num++) {
        console.log(`${num} * ${multiplier} = ${num * multiplier}`);
    }
}

multiplication(["10"]);