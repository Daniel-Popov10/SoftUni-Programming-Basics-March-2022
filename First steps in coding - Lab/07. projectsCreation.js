function projects(input) {

    let architect = input[0];
    let projects = Number(input[1]);
    let totalTimeForProjects = projects * 3;

    console.log(`The architect ${architect} will need ${totalTimeForProjects} hours to complete ${projects} project/s.`);
}

projects(["George", "4"]);