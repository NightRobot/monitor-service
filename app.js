const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');

/*
logger configuration
*/
var morgan = require('morgan');
var winston = require('./config/winston');

/*
Config port Application
*/
const PORT = config.get('app.port');

// Set up mongoose connection
const mongo = require('./database/mysql')
// let user    = require('./routes/user.route');
let ticket    = require('./routes/ticket.route');
let product    = require('./routes/product.route');
let order    = require('./routes/order.route');

/*
service configuration
*/
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('combined', { stream: winston.stream }));

/*
route config
*/

// app.use('/user', user);
app.use('/ticket', ticket);
app.use('/product', product);
app.use('/order', order);

/*
listen service
*/
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
