const serverless = require('serverless-http');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');
var cookieParser = require('cookie-parser');
app.use(cookieParser()); // Add this after you initialize express.

// require handlebars
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// Set db
require('./data/greenGear-db');
// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!



// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Use handlebars to render
app.set('view engine', 'handlebars');


app.get("/", (req,res)=> {
    console.log("root route")
    res.send("")
})




app.listen(3003,() =>{
    console.log("server is running on port 3003")
})

module.exports.handler = serverless(app);