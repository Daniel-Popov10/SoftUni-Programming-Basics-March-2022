function num100To200(input) {

    let numb = Number(input[0]);

    if (numb < 100) {

        console.log("Less than 100");
    } else if (numb <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}


num100To200(["99"]);