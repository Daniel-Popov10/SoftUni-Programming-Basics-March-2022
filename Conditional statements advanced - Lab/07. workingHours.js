function workingHours(input) {
    let openHours = Number(input[0]);
    let day = input[1];

    if (openHours >= 10 && openHours <= 18 && day !== "Sunday") {
        console.log("open");
    } else {
        console.log("closed");
    }
}

workingHours(["19", "Friday"]);