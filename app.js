// app.js
// ======

// instantiate cli
const cli = require("./CLI");
const rl = cli.rl;
const print = cli.print;


const commands = {
    "hello": () => {print("world!\n");},
    "quit":  () => {rl.close();},
    "exit":  () => {rl.close();},
};


cli.activateCLI(commands);
