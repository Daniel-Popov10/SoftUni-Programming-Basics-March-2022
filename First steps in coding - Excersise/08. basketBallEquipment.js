function basketball(input) {

    let taxPerYear = Number(input[0]);
    let shoes = taxPerYear * 0.60;
    let suit = shoes * 0.80;
    let ball = suit / 4;
    let accesories = ball / 5;

    let totalPrice = taxPerYear + shoes + suit + ball + accesories;

    console.log(totalPrice);

}


basketball(["365"]);