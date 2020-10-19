const { Router } = require("express");
const router = Router();

router.get("/", (request, response) => {
  response.send("Hello, world");
});

router.get("/medium", (request, response) => {
  response.send("Hello, medium");
});

module.exports = (app) => app.use("/", router);

// https://medium.com/@thiagocrespo241103/sonarqube-verificando-qualidade-do-c%C3%B3digo-em-8-minutos-37826d3cac76
