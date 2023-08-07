function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;
    let currentBook = input[index];
    let checkedBooks = 0;


    while (favouriteBook !== "No More Books") {
        currentBook = input[index];
        index++;
        checkedBooks++;

        if (currentBook === favouriteBook) {
            console.log(`You checked ${checkedBooks - 1} books and found it.`);
            break;
        } else if (currentBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${checkedBooks - 1} books.`);
            break;
        }

    }

}



oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);