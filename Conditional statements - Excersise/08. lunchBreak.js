function lunchBreak(input) {
    let series = input[0];
    let episodeTime = Number(input[1]);
    let lunchBreak = Number(input[2]);


    let quetTime = lunchBreak / 8;
    let eatingTime = lunchBreak / 4;

    let timeLeft = lunchBreak - quetTime - eatingTime;

    if (timeLeft >= episodeTime) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(timeLeft - episodeTime)} minutes free time.`)
    } else if (episodeTime > timeLeft) {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(episodeTime - timeLeft)} more minutes.`)
    }


}



lunchBreak(["Teen Wolf",

    "48",

    "60"]) 