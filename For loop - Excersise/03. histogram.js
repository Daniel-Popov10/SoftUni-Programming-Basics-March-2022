function histogram(input) {

    let num = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let index = 1; index <= num; index++) {
        let currentNum = Number(input[index]);

        if (currentNum < 200) {
            p1++;
        } else if (currentNum <= 399) {
            p2++;
        } else if (currentNum <= 599) {
            p3++;
        } else if (currentNum <= 799) {
            p4++;
        } else if (currentNum >= 800) {
            p5++;
        }
    }

    console.log(`${(p1 / num * 100).toFixed(2)}%`);
    console.log(`${(p2 / num * 100).toFixed(2)}%`);
    console.log(`${(p3 / num * 100).toFixed(2)}%`);
    console.log(`${(p4 / num * 100).toFixed(2)}%`);
    console.log(`${(p5 / num * 100).toFixed(2)}%`);

}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);