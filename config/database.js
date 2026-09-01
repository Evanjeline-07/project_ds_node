const mysql = require('mysql2/promise')

const db = mysql.createPoll({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto_backend_angel',
    port: 3306
});

module.exports = db;