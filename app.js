// app.js
// ======

// instantiate cli
const cli = require("./CLI");
const rl = cli.rl;
const print = cli.print;

// add fuctions
const example = require("./example.js");

const commands = {
    "hello": () => {print("world!\n");},
    "look":  () => {print("You stare into the void.\n");},
    "quit":  () => {rl.close();},
    "exit":  () => {rl.close();},
    "help": function(){print("I respond to the following commands " + (Object.keys(this)).join(", ") + "\n");},
    "test":  example.example
};


cli.activateCLI(commands);
