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
    rl.on("line", (line) => {
        let command = line.trim().toLowerCase();
        if (command in commands) {
            commands[command]();
        } else {
            print("Say what? I might have heard '" + line.trim()
            + "'\n");
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
