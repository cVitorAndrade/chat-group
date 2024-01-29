const express = require("express");

const app = express();

const routes = require("./routes");

app.use(express.json());

app.use(routes);

const Port = 3333;

app.listen(Port, () => console.log(`Server is running on Port: ${Port}`));