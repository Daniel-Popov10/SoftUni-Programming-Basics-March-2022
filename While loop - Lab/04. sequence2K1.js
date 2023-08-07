function sequence(input) {
    let n = Number(input[0]);

    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter *= 2;
        counter++;
    }
}


sequence(["31"]);