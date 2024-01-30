const express = require("express");
const cors = require("cors");
const http = require("http");

const { initializeSocket } = require("./socket");

const app = express();
app.use(cors());

const server = http.createServer(app);

initializeSocket(server);

const routes = require("./routes");

app.use(express.json());

app.use(routes);

const Port = 3333;

server.listen(Port, () => console.log(`Server is running on Port: ${Port}`));