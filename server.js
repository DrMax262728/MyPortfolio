require("dotenv").config();

const express = require("express");
const next = require("next");

const { NODE_ENV, FRONT_END_PORT, FRONT_END_HOST } = process.env;

const dev = NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => handle(req, res));

  server.listen(FRONT_END_PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${FRONT_END_HOST}:${FRONT_END_PORT}`);
  });
});
