function walking(input) {
    let index = 0;
    let currentSteps = Number(input[index]);
    let command = input[index];
    let totalSteps = 0;
    let goal = 10000;


    while (command !== "Going home") {
        currentSteps = Number(command)
        totalSteps += currentSteps;

        if (totalSteps >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goal} steps over the goal!`);
            break;
        } else if (goal < totalSteps) {
            console.log(`${Math.abs(goal - totalSteps)} steps to reach goal.`);
        }

        index++;
        command = input[index];

    }

    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        totalSteps += stepsToHome;
        if (totalSteps >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goal} steps over the goal!`);
        } else {
            console.log(`${Math.abs(goal - totalSteps)} more steps to reach goal.`);

        }
    }

}

walking(["1500", "300", "2500", "3000", "Going home", "200"]);