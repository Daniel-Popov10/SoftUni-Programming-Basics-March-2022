// имаме подадено произволно число, ако това число е по голямо от 10 да се изкарат всички числа от числото до 100, 
//в противен случай да се изкарат всички други числа които започват от даденото число до нула

function checkRandom(numb) {


    if (typeof numb === "number") {

        if (numb > 10 && numb < 100) {
            for (let i = numb; i <= 100; i++) {
                console.log(i);
            }

        } else if (numb <= 10) {
            for (let i = numb; i >= 0; i--) {
                console.log(i);
            }
        } else {

        }
    } else {
        console.log("Invalid input data");
    }

    // let numb = Math.floor(Math.random() * 100);


}

checkRandom(20);


