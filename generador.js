const crypto = require("crypto");

let randomText = crypto.randomBytes(32).toString("hex");


console.log(randomText)