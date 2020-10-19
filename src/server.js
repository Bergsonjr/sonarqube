const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

require("./routes")(server);

module.exports = server;
