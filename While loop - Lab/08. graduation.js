function graduation(input) {
    let name = input[0];
    let grade = 1;
    let index = 1;
    let currentGrade = Number(input[index]);
    let badGrade = 0;
    let averageGrade = 0;
    let isExcluded = false;


    while (grade < 13) {

        if (currentGrade < 4) {
            badGrade++;
            if (badGrade >= 1) {
                isExcluded = true;
                break;
            }
        }

        index++;
        averageGrade += currentGrade;
        currentGrade = Number(input[index]);
        grade++;

    }

    if (!isExcluded) {
        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${grade} grade`);
    }
}


graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);