function sumSeconds(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let totalTime = (first + second + third);
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds > 9) {
        console.log(`${minutes}:${seconds}`);
    } else {
        console.log(`${minutes}:0${seconds}`)
    }

}


sumSeconds(["35", "45", "44"]);