let readlineSync = require("readline-sync");
let database = []

function add() {
    let new_name = readlineSync.question("May I have the student name?\n");
    database.push({ id: database.length + 1, name: new_name });
}
function remove() {
    let choices = "[";
    for (let i = 0; i < database.length; i++) {
        if (i + 1 != database.length) {
            choices = choices + database[i].id + ", ";
        } else {
            choices = choices + database[i].id + "]";
        }
    }
    let remove = readlineSync.question("Enter ID. " + choices + "\n");
    database.splice(database.findIndex(function (i) {
        return i.id === Number(remove);
    }), 1);
}
function display() {
    console.log("List of students:\nID  -  Name")
    for (let i = 0; i < database.length; i++) {
        console.log(database[i].id + " - " + database[i].name);
    }

}

// Starting point of our app
function main() {
    let continueProgram = true;
    while (continueProgram) {
        console.log();
        console.log();
        console.log();
        console.log(`[1] Add\n[2] Remove\n[3] Display\n[0] CANCEL`);
        let choice = readlineSync.question("Choice? [1, 2, 3, 0]: ");
        switch (choice) {
            case "1":
                console.log();
                console.log();
                add();
                break;
            case "2":
                console.log();
                console.log();
                remove();
                break;
            case "3":
                console.log();
                console.log();
                display();
                break;
            case "0":
                continueProgram = false;
                break;
            default:
                console.log();
                console.log();
                console.log("Please enter a choice between 0-3.");
                break;
        }
    }
    console.log("Program exiting. Goodbye!");
    process.exit(0);
}

main()