const sql = require('mysql2/promise');

const pool = sql.createPool({
    host: 'localhost',
    user:   'root',
    password: '',
    database: 'student_db',
});

module.exports = pool;