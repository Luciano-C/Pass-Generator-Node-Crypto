const crypto = require("crypto");
const prompt = require("prompt-sync")();


let passwordLength = Number(prompt("Ingresar número de bytes de la contraseña: "));

let randomText = crypto.randomBytes(passwordLength).toString("hex");


console.log(randomText)