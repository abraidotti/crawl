// CLI.js
// ======


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

function activateCLI (commands) {
    rl.on("line", (line) => {
        let command = line.trim().toLowerCase();
        if (command in commands) {
            commands[command]();
        } else {
            process.stdout.write("Say what? I might have heard '" + line.trim()
            + "'\n");
        }
        rl.prompt();
    }).on("close", () => {
        process.stdout.write("Have a great day!\n\n");
        process.exit(0);
    });
}

exports.rl = rl;
exports.activateCLI = activateCLI;
