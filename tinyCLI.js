// Example from https://nodejs.org/api/readline.html#readline_example_tiny_cli


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

var commands = {
    "hello": () => {return "world!\n";},
    "look": () => {return "It seems someone spat here.\n";},
    "taste": (s) => {return "You lick the " + s.join(" ")+ ".\n";},
    "quit": () => {rl.close(); },
    "exit": () => {rl.close(); },
    "win": () => {process.stdout.write("YOU WIN!\n"); rl.close();},
};

function f(line) {
    let message = "Say what? I might have heard '" + line.trim() + "'.\n";
    let input = line.trim().toLowerCase().split(" ");
    if (input[0] in commands) {
        message = commands[input[0]](input.slice(1));
    }
    return message;
}

rl.on("line", (line) => {
    var message = f(line);
    process.stdout.write(message);
    rl.prompt();
}).on("close", () => {
    process.stdout.write("Have a great day!\n\n");
    process.exit(0);
});
