function radiansToDegrees(input) {

    let angle = Number(input[0]);
    let result = (angle * 180) / Math.PI;
    console.log(result);
}

radiansToDegrees(["3.1416"]);