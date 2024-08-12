import express from "express";
const app = express();
const port = 3000;

/**
 * The forwardslash goes at the end of the homepage (ex. localhost:3000/)
 */
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

/**
 * 1st param is the port. The second, is the callback. The callback triggers as soon as the server gets set up.
 */
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});