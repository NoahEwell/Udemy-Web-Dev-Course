import express from "express";

const app = express();
const port = 3000;
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    let dayNumber = new Date().getDay();
    let data = [];
    switch (dayNumber) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            data.push("weekday");
            data.push("it's time to work hard");
            break;
        case 0:
        case 6:
            data.push("weekend");
            data.push("it's time to have fun");
            break;
        default: 
        console.log("Something went wrong in switch: " + dayNumber);
            break;
    }
    res.render(__dirname + "/views/index.ejs", { data: data});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});