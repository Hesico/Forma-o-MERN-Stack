const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual seu nome? ", (input) =>{
    console.log("O nome é " + input);
})

rl.on("close", () => {
    console.log("Bye");
    process.exit(0);
})