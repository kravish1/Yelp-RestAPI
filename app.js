const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//Use Mongoose to connect to the Mongo DB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RestaurantAPI');

const routes = require('./router/routesAPI');

//Create the App instance
const app = express();
//to serve static files like index.html
//app.use(express.static('public'));

app.use(cors());
//to read the POST request body
app.use(bodyParser({urlencoded : true}));
//Specify the response content-type
app.use(bodyParser.json());
//Handle RestAPI Server routes
app.use('/api',routes);


app.listen(3001);
console.log('Server started on port 3001');
