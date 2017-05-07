// Example from https://nodejs.org/api/readline.html#readline_example_tiny_cli


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

rl.on("line", (line) => {
    switch(line.trim().toLowerCase()) {
    case "hello":
        process.stdout.write("world!\n");
        break;
    case "quit":
        rl.close();
        break;
    case "exit":
        rl.close();
        break;
    default:
        process.stdout.write("Say what? I might have heard '" + line.trim()
        + "'\n");
        break;
    }
    rl.prompt();
}).on("close", () => {
    process.stdout.write("Have a great day!\n\n");
    process.exit(0);
});
