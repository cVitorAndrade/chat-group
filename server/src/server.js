require("express-async-errors");

const express = require("express");
const cors = require("cors");
const http = require("http");

const AppError = require("./utils/AppError");

const { initializeSocket } = require("./socket");

const app = express();
app.use(cors());

const server = http.createServer(app);

initializeSocket(server);

const routes = require("./routes");

app.use(express.json());

app.use(routes);

app.use(( error, request, response, next) => {
    if ( error instanceof AppError ) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error."
    })
});


const Port = 3333;

server.listen(Port, () => console.log(`Server is running on Port: ${Port}`));