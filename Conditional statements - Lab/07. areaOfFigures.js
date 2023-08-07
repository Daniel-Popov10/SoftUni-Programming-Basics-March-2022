function areaOfFigures(input) {

    let figureType = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let area = 0;


    if (figureType === "square") {
        area = a * a;
    } else if (figureType === "rectangle") {
        area = a * b;
    } else if (figureType === "circle") {
        area = a * a * Math.PI;
    } else if (figureType === "triangle") {
        area = a * b / 2;
    }

    console.log(area.toFixed(3));
}


areaOfFigures(["triangle",

    "4.5",

    "20"]) 