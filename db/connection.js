const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: `localhost`,
        user: `root`,
        password: `01N3psEaGzdExce3BV97kuWg`,
        database: `election`
    },
    console.log(`Connected to the election database.`)
);

module.exports = db;