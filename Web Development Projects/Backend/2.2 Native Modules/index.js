const fs = require("fs");

// Writes to the file, message.txt
fs.writeFile("message.txt", "Hello from Noah using Node.js!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

// Reads to the file, message.txt. "utf8" has to be specified so it doesn't return the raw buffer.
fs.readFile("message.txt", "utf8",(err, data) => {
    if (err) throw err;
    console.log("FILE CONTENTS");
    console.log("-------------");
    console.log(data);
});