const pool =  require('../config/db');
const bcrypt = require('bcrypt');

const Student = {
    getAll: () => {
        return pool.query('SELECT * FROM student');
    },
    getOne: (id) => {
        return pool.query('SELECT * FROM student WHERE id = ?', [id]);
    },
    create: (student) => {
        const hashedPassword = bcrypt.hashSync(student.password, 10);
        return pool.query('INSERT INTO `students`(`name`, `email`, `password`) VALUES (?, ?, ?)', [student.name, student.email, hashedPassword]);
    },
    update: (id, student) => {
        return pool.query('UPDATE student SET ? WHERE id = ?', [student, id]);
    },
    delete: (id) => {
        return pool.query('DELETE FROM student WHERE id = ?', [id]);
    }
};

module.exports = Student;
