function vacationBooklist(input) {

    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDays = Number(input[2]);

    let totalTime = numberOfPages / pagesPerHour / numberOfDays;
    console.log(totalTime);
}


vacationBooklist(["212", "20", "2"]);