function onTime(input) {
    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = hoursExam * 60 + minExam;
    let timeArrive = hoursArrive * 60 + minArrive;
    let diff = Math.abs(timeArrive - timeExam);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (timeExam < timeArrive) {
        console.log("Late")
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`)
            } else {
                console.log(`${h}:${m} hours after the start`)
            }
        } else {
            console.log(`${m} minutes after the start`)
        }
    } else if (timeArrive <= timeExam && Math.abs(timeExam - timeArrive) <= 30) {
        console.log("On time");
        if (diff > 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log("Early")
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        } else {
            console.log(`${m} minutes before the start`);
        }
    }
}

onTime(["9", "30", "9", "50"]);