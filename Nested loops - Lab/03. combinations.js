function combinations(input) {
    let ComboNum = Number(input[0]);

    let validCombinationsCount = 0;
    for (let x1 = 0; x1 <= ComboNum; x1++) {
        for (let x2 = 0; x2 <= ComboNum; x2++) {
            for (let x3 = 0; x3 <= ComboNum; x3++) {
                if (x1 + x2 + x3 === ComboNum){
                    validCombinationsCount++;
                    
                }
            }
        }
    }

    console.log(validCombinationsCount);
}

combinations(["20"]);
