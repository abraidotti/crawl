// app.js
// ======

// instantiate cli
const cli = require("./CLI");
const rl = cli.rl;


const commands = {
    "hello": () => {process.stdout.write("world!\n");},
    "quit":  () => {rl.close();},
    "exit":  () => {rl.close();},
};


cli.activateCLI(commands);
