const cli = require("./CLI");
const print = cli.print;

function example() {
    for (let a in arguments) {
        print(arguments[a]+ "\n");
    }
}

exports.example = example;
