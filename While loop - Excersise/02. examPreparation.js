function examPrep(input) {
    let badGrades = Number(input[0]);
    let index = 1;
    let totalGrades = 0;
    let exceriseName = input[index];
    let averageGrade = 0;
    let lastProblem = input[index];
    let badGrade = 0;
    let isFailed = false;

    while (exceriseName !== "Enough") {
        lastProblem = input[index];
        index++;
        let grade = Number(input[index]);

        if (grade <= 4) {
            badGrade++;
            if (badGrade >= badGrades) {
                isFailed = true;
                console.log(`You need a break, ${badGrade} poor grades.`);
                break;
            }
        }

        averageGrade += grade;
        totalGrades++;
        index++;
        exceriseName = input[index];
    }

    if (!isFailed) {
        console.log(`Average score: ${(averageGrade / totalGrades).toFixed(2)}`);
        console.log(`Number of problems: ${(totalGrades)}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

examPrep(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);