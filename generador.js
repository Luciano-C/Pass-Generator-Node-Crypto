crypto = require("crypto");

randomText = crypto.randomBytes(32).toString("hex");

console.log(randomText)