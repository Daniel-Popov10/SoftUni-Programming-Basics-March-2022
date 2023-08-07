function worldRecord(input) {
    let worldRecord = Number(input[0]);
    let distanceInmeters = Number(input[1]);
    let distanceForOneMeter = Number(input[2]);

    let distanceCovered = distanceInmeters * distanceForOneMeter;
    let delay = Math.floor(distanceInmeters / 15) * 12.5;
    let totalTime = distanceCovered + delay;


    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else if (totalTime >= worldRecord) {
        console.log(`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`)
    }

}


worldRecord(["10464", "1500", "20"]);