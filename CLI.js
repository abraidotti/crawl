// CLI.js
// ======


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

function print(line) {
    process.stdout.write(line);
}

function activateCLI (commands) {
    print("You have fallen into a dangerous cave. You need to find a way out. Type ‘help’ for a list of commands.\n")
    rl.on("line", (line) => {
        let args = line.trim().toLowerCase().split(" ");
        if (args.length > 0) {
            let command = args[0];
            if (command in commands) {
                commands[command](...args.slice(1));
            } else {
                print(`Say what? I don't know how to '${command}'.\n`);
            }
        }
        rl.prompt();
    }).on("close", () => {
        print("Have a great day!\n\n");
        process.exit(0);
    });
}

exports.rl = rl;
exports.print = print;
exports.activateCLI = activateCLI;
