const express = require("express");
const server = express();
const expressSecssion = require("express-session");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config()
const port = process.env.PORT;
// Middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(
  expressSecssion({
    secret: "ditme",
    resave: false,
    proxy: true,
    saveUninitialized: true
  })
);

//Route

//Start server
server.listen(port, () => {
  console.log(`Serve is running on ${port}`);
});
