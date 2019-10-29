const mysql = require('mysql');
const config = require('config');

const host = config.get('db.host')
const port = config.get('db.port')
const schema = config.get('db.schema')
const username = config.get('db.username')
const password = config.get('db.password')
const db = mysql.createConnection ({
    host: host,
    user: username,
    password: password,
    database: schema
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to '+host+":"+port+" "+schema);
});
global.db = db;
