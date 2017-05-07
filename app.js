// app.js
// ======

// instantiate cli
const cli = require("./CLI");
const rl = cli.rl;
const print = cli.print;

function example() {
    for (let a in arguments) {
        print(arguments[a]+ "\n");
    }
}

const commands = {
    "hello": () => {print("world!\n");},
    "quit":  () => {rl.close();},
    "exit":  () => {rl.close();},
    "test":  example,
};


cli.activateCLI(commands);
