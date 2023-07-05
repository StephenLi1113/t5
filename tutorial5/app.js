const express = require('express');
const app = express();

const runFile = require("./api/routes/routes");

app.use(express.json());

app.use("/", runFile);


// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "OK"
//     })
// })

module.exports = app;