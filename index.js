let Handlebars = require('handlebars');

var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);

var data = {
    "name": "Alan",
    "hometown": "Somewhere, TX",
    "kids": [{
        "name": "Jimmy",
        "age": "12"
    }, {
        "name": "Sally",
        "age": "4"
    }]
};
var result = template(data);

console.log(result);


const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const bookController = require("./src/bookController.js");

const app = express();
const port = process.env.PORT || 8000;

// const connectString = process.env.DB_CONNECT_STRING;

// Colors are always nice
const noColor = "\033[0m";
const azure = "\x1b[36m";

// App setup
// =============================================================================

app.use(bodyParser.json());

app.use(function (error, request, response, next) {
    response.status(error.status || 500);
    response.json({
        error: error.message
    });
});

const server = app.listen(port, function () {
    console.log(
        `\n${azure}Check out your compiled resume at http://localhost:${port}\n`
    );
});

// const router = express.Router();

/*
 * GET
 */
app.use("/", (req, res) => {
    // console.log(req);
    
    return res.send(result);
});

// app.use("/", router);
